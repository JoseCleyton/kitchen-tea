import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GiftSuggestionService } from 'src/app/services/giftSuggestion/gift-suggestion.service';
import { KitchenService } from 'src/app/services/kitchen/kitchen.service';
import { NewGiftSuggestionComponent } from '../new-gift-suggestion/new-gift-suggestion.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gift-suggestion',
  templateUrl: './gift-suggestion.component.html',
  styleUrls: ['./gift-suggestion.component.scss'],
})
export class GiftSuggestionComponent implements OnInit {
  key: string;
  revelation: any;
  giftSuggestions = [];
  selectedGiftSugestion = '';
  expired = false;

  constructor(
    private _activedRouter: ActivatedRoute,
    private _kitchenService: KitchenService,
    private _giftSuggestionService: GiftSuggestionService,
    public dialog: MatDialog,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.key = this._activedRouter.snapshot.params['key'];
    this.findKitchenByKey();
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
      .subscribe(
        (data: any[]) => (this.giftSuggestions = data),
        (error) => {
          if (error.status === 423) {
            this.revelation = error.error;
            this.expired = true;
            this._toastr.info('Recurso expirado!');
          }
        }
      );
  }

  clickLink(externalLink: string) {
    window.open(`${externalLink}`);
  }

  selectGiftSuggestion(id: string): void {
    this.selectedGiftSugestion = id;
  }

  newGiftSuggestion(event: string): void {
    const dialogRefGift = this.dialog.open(NewGiftSuggestionComponent);
    dialogRefGift.afterClosed().subscribe((result) => {
      if (result) {
        let giftSuggestion = { ...result.value };
        giftSuggestion.revelation = this.revelation;
        this._giftSuggestionService
          .save(giftSuggestion)
          .pipe(
            switchMap(() =>
              this._giftSuggestionService.findByRevelationId(this.revelation.id)
            )
          )
          .subscribe((data: any[]) => (this.giftSuggestions = data));
      }
    });
  }
}
