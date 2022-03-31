import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

import { AbhishekRoutingModule } from './abhishek-routing.module';
import { AbhishekComponent } from './abhishek.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { LinksComponent } from './links/links.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AbhishekComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    FaqsComponent,
    LinksComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AbhishekRoutingModule,
    MdbCollapseModule,
  ],
  providers: [],
  bootstrap: [AbhishekComponent]
})
export class AbhishekModule { }
