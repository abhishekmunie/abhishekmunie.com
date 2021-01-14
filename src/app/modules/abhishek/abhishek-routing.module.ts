import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbhishekComponent } from './abhishek.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { FaqsComponent } from './faqs/faqs.component';
import { LinksComponent } from './links/links.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {
    path: '', component: AbhishekComponent,
    children: [
      {
        path: '', component: HomeComponent,
        data: {
          title: 'Home · Abhishek '
        }
      },
      {
        path: 'about', component: AboutComponent,
        data: {
          title: 'About'
        }
      },
      {
        path: 'events', component: EventsComponent,
        data: {
          title: 'Events'
        }
      },
      {
        path: 'faqs', component: FaqsComponent,
        data: {
          title: 'FAQs'
        }
      },
      {
        path: 'links', component: LinksComponent,
        data: {
          title: 'Links'
        }
      },
      {
        path: 'photos', component: PhotosComponent,
        data: {
          title: 'Photos'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbhishekRoutingModule { }
