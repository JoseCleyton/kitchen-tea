import { tap, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KitchenService } from '../services/kitchen/kitchen.service';
import { ConfirmComponent } from '../shared/confirm/confirm.component';
import { NewEventComponent } from './new-event/new-event.component';
import { of } from 'rxjs';
import { EditEventComponent } from './edit-event/edit-event.component';
import { URL_FRONT } from '../shared/constants/url_front.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataSource = [];

  constructor(
    private _kitchenService: KitchenService,
    private _toastrService: ToastrService,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  newEvent(formNewEvent: FormControl): void {
    console.log('new');
    const year = Number(formNewEvent.get('expiredIn').value.substring(4));

    const month =
      Number(formNewEvent.get('expiredIn').value.substring(2, 4)) - 1;

    const day = Number(formNewEvent.get('expiredIn').value.substring(0, 2));

    const expiredIn = this.getUtcDate(year, month, day);

    const data = {
      name: formNewEvent.get('name').value,
      key: formNewEvent.get('key').value,
      expiredIn,
    };

    console.log(data);
    this._kitchenService.save(data).subscribe(() => this.findAll());
  }

  editEvent(event: any): void {
    const year = Number(event.expiredIn.substring(4));

    const month = Number(event.expiredIn.substring(2, 4)) - 1;

    const day = Number(event.expiredIn.substring(0, 2));

    console.log(year, month, day);
    event.expiredIn = this.getUtcDate(year, month, day);
    console.log(event.expiredIn);

    this._kitchenService.edit(event).subscribe(() => this.findAll());
  }

  public findAll() {
    this._kitchenService.findAll().subscribe((data: any[]) => {
      this.dataSource = data;
    });
  }

  preventDefault(event: Event): void {
    event.stopPropagation();
  }

  copyToClipBoard(key: string): string {
    return `${URL_FRONT.URL_FRONT}/feature/revelation/guest/${key}`;
  }

  copyClipBoardToastr() {
    this._toastrService.success('Chave copiada com Sucesso!');
  }

  goToRevelation(key: string) {
    this._router.navigate([`/feature/revelation/admin/${key}`]);
  }

  openDialogNewEvent(): void {
    this.dialog
      .open(NewEventComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) this.newEvent(result);
      });
  }

  openDialogEditEvent(data): void {
    this.dialog
      .open(EditEventComponent, {
        data,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          result.quantityGifts = data.quantityGifts;
          result.quantityGuest = data.quantityGuest;
          result.id = data.id;
          this.editEvent(result);
        }
      });
  }

  delete(id: number): void {
    this.dialog
      .open(ConfirmComponent, {
        width: '300px',
        data: { text: 'Deseja realmente deletar esse evento?' },
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this._kitchenService.delete(id).subscribe(() => this.findAll());
        }
      });
  }

  getUtcDate(year: number, month: number, day: number): Date {
    const date = new Date(year, month, day, 20);
    return date;
  }
}
