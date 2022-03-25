import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { HeaderComponent } from '../header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [FeatureComponent, HeaderComponent],
  imports: [CommonModule, FeatureRoutingModule, MatToolbarModule],
})
export class FeatureModule {}
