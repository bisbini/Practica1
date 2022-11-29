import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingSlidingPageRoutingModule } from './listing-sliding-routing.module';

import { ListingSlidingPage } from './listing-sliding.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingSlidingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListingSlidingPage]
})
export class ListingSlidingPageModule {}
