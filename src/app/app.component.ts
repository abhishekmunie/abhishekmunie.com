import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeAnimations } from './app-routing.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimations
  ]
})
export class AppComponent {
  title = 'abhishekmunie';

  prepareRoute(outlet: RouterOutlet) {
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
