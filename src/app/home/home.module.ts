import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgxMaskModule } from 'ngx-mask';
import { NewEventComponent } from './new-event/new-event.component';

@NgModule({
  declarations: [HomeComponent, NewEventComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ClipboardModule,
    NgxMaskModule.forRoot(),
    MatCardModule,
    MatDialogModule,
  ],
})
export class HomeModule {}
