import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    data: {
      title: 'Home'
    }
  },
  {
    path: 'abhishek',
    loadChildren: () => import('./modules/abhishek/abhishek.module').then(mod => mod.AbhishekModule),
    data: {
      title: 'Life & Abhishek'
    }
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then(mod => mod.ProjectsModule),
    data: {
      title: 'Projects'
    }
  },
  {
    path: 'science',
    loadChildren: () => import('./modules/science/science.module').then(mod => mod.ScienceModule),
    data: {
      title: 'Science & Technology'
    },
  },
  {
    path: 'connect',
    loadChildren: () => import('./modules/connect/connect.module').then(mod => mod.ConnectModule),
    data: {
      title: 'Connect'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
