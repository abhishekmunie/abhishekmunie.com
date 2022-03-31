import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';

// Routing Components
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BreadcrumbComponent,
    SiteFooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: environment.appId }),
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MdbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
