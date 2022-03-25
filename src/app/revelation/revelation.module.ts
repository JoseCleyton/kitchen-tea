import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevelationRoutingModule } from './revelation-routing.module';
import { RevelationComponent } from './revelation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { UserComponent } from './user/user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NewGiftSuggestionComponent } from './new-gift-suggestion/new-gift-suggestion.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GiftSuggestionComponent } from './gift-suggestion/gift-suggestion.component';
import { GuestComponent } from './guest/guest.component';
import { TableComponent } from './components/table/table.component';
import { NewGiftComponent } from './new-gift/new-gift.component';

@NgModule({
  declarations: [RevelationComponent, UserComponent, NewGiftSuggestionComponent, ToolbarComponent, GiftSuggestionComponent, GuestComponent, TableComponent, NewGiftComponent],
  imports: [
    CommonModule,
    RevelationRoutingModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class RevelationModule {}
