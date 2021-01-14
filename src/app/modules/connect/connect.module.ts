import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ConnectComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule
  ],
  providers: [],
  bootstrap: [ConnectComponent]
})
export class ConnectModule { }
