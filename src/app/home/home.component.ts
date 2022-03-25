import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KitchenService } from '../services/kitchen/kitchen.service';
import { NewEventComponent } from './new-event/new-event.component';

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
    const year = Number(formNewEvent.get('expiredIn').value.substring(4));

    const month =
      Number(formNewEvent.get('expiredIn').value.substring(2, 4)) - 1;

    const day = Number(formNewEvent.get('expiredIn').value.substring(0, 2));
    const expiredIn = new Date(year, month, day, 23, 59, 59);

    const data = {
      name: formNewEvent.get('name').value,
      key: formNewEvent.get('key').value,
      expiredIn,
    };

    this._kitchenService.save(data).subscribe(() => this.findAll());
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
    return `http://localhost:4200/feature/revelation/guest/${key}`;
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
}
