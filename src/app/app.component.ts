import {Component} from '@angular/core';
import {Router}    from "@angular/router";

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent {
  title = 'trale-web-app';
  public router: string;

  constructor(
    private _router: Router,
  ) {
    this.router = _router.url;
  }

}
