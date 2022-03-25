import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftSuggestionGuard } from '../core/guard/gift-suggestion.guard';
import { GiftSuggestionComponent } from './gift-suggestion/gift-suggestion.component';
import { GuestComponent } from './guest/guest.component';
import { RevelationComponent } from './revelation.component';

const routes: Routes = [
  {
    path: '',
    component: RevelationComponent,
    children: [
      {
        path: 'admin/:key',
        component: GiftSuggestionComponent,
        canActivate: [GiftSuggestionGuard],
      },
      { path: 'guest/:key', component: GuestComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevelationRoutingModule {}
