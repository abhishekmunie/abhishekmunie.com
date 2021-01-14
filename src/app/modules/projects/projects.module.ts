import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    ProjectsRoutingModule
  ],
  providers: [],
  bootstrap: [ProjectsComponent]
})
export class ProjectsModule { }
