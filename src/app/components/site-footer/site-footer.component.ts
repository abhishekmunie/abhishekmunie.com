import { Component, OnInit } from '@angular/core';

import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
  faApple,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit {

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faEnvelope = faEnvelope;
  faApple = faApple;
  faGithub = faGithub;

  constructor() { }

  ngOnInit() {
  }

}
