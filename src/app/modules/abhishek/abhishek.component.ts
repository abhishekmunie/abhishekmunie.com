import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-abhishek',
  templateUrl: './abhishek.component.html',
  styleUrls: ['./abhishek.component.scss']
})
export class AbhishekComponent implements OnInit {

  data = {
    name: 'Abhishek Munie',
    bio: 'Cloud Engineer',
    image: 'avatar.png'
  };

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/about' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image }
    ]);
  }

}
