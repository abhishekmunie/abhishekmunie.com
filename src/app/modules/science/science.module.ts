import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScienceRoutingModule } from './science-routing.module';
import { ScienceComponent } from './science.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ScienceComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ScienceRoutingModule
  ],
  providers: [],
  bootstrap: [ScienceComponent]
})
export class ScienceModule { }
