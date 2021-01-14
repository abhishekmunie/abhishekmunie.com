import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent {
  breadcrumbs = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(() => this.activatedRoute),
    mergeMap((route) => route.data),
    map((event) => this.buildBreadCrumb(this.activatedRoute.root)));
  // Build your breadcrumb starting with the root route of your current activated route

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    // If no routeConfig is avalailable we are on the root path
    console.log('route.routeConfig', route.routeConfig);
    const ref = route.routeConfig;
    if ((ref != null ? ref.data : void 0) == null || !ref?.path) {
      if (route.firstChild) {
        // If we are not on our current path yet,
        // there will be more children to look after, to build our breadcumb
        return this.buildBreadCrumb(route.firstChild, `${url}`, breadcrumbs);
      }
      return breadcrumbs;
    }

    const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.title : '';
    const path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    console.log(path)
    // In the routeConfig the complete path is not available,
    // so we rebuild it each time
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label,
      url: nextUrl
    };
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      // If we are not on our current path yet,
      // there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
