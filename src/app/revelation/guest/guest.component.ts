import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { GiftSuggestionService } from 'src/app/services/giftSuggestion/gift-suggestion.service';
import { KitchenService } from 'src/app/services/kitchen/kitchen.service';
import { NewGiftComponent } from '../new-gift/new-gift.component';
import { GiftService } from 'src/app/services/gift/gift.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss'],
})
export class GuestComponent implements OnInit {
  completeNameUser: string;
  giftSuggestions = [];
  selectedGiftSugestion = '';
  key: string;
  revelation: any;
  gift: any;
  selected = false;
  disabled = false;

  constructor(
    public dialog: MatDialog,
    private _activedRouter: ActivatedRoute,
    private _kitchenService: KitchenService,
    private _giftSuggestionService: GiftSuggestionService,
    private _giftService: GiftService
  ) {}

  ngOnInit(): void {
    this.key = this._activedRouter.snapshot.paramMap.get('key');
    const dialogRef = this.dialog.open(UserComponent, {
      width: '320px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.completeNameUser = result;
      this.findKitchenByKey();
    });
  }

  clickLink(externalLink: string) {
    window.open(`${externalLink}`);
  }

  selectGiftSuggestion(id: string): void {
    this.selectedGiftSugestion = id;
    const dialogNewGift = this.dialog.open(NewGiftComponent, {
      width: '250px',
    });

    dialogNewGift.afterClosed().subscribe((result) => {
      if (result) {
        const giftSuggestion = {
          id: this.selectedGiftSugestion,
        };
        const guest = {
          name: this.completeNameUser,
        };

        const gift = {
          giftSuggestion,
          guest,
          revelation: this.revelation,
        };

        this._giftService.save(gift).subscribe((data) => {
          this.gift = data;
          this.selected = this.gift.giftSuggestion.id;
          this.disabled = true;
        });
      }
    });
  }

  findKitchenByKey(): void {
    this._kitchenService
      .findByKey(this.key)
      .pipe(
        switchMap((data) => {
          this.revelation = { ...data };
          return this._giftSuggestionService.findByRevelationId(
            this.revelation.id
          );
        })
      )
      .subscribe((data: any[]) => {
        this.giftSuggestions = data;
        this.findGiftByGuestName();
      });
  }

  findGiftByGuestName(): void {
    this._giftService
      .findByGuestName(this.completeNameUser)
      .subscribe((data) => {
        if (data) {
          this.gift = data;
          this.selected = this.gift.giftSuggestion.id;
          this.disabled =
            this.giftSuggestions.filter(
              (suggestion) => suggestion.id === this.selected
            ).length > 0;
        }
      });
  }
}
