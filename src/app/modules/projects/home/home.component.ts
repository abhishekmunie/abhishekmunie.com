import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { concatAll, bufferCount, toArray } from 'rxjs/operators';

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const REPOS_URL = 'https://api.github.com/users/abhishekmunie/repos';
const REPO_ROW_SIZE = 3;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faGraduationCap = faGraduationCap;

  repos: Observable<any>;
  repoRows: Observable<any>;

  constructor(private http: HttpClient) {
    this.repos = this.http.get(REPOS_URL);
    const repoVals = this.repos.pipe(concatAll());
    this.repoRows = repoVals.pipe(bufferCount(REPO_ROW_SIZE), toArray());
  }

  ngOnInit() {
  }

}
