import {Component, Inject, forwardRef} from '@angular/core';
import {OnsSplitterContent} from 'ngx-onsenui';
import {MyApp} from '../app';
@Component({
  selector: 'ons-page[home]',
  template: require('./home.html'),
  styles: [
    './home.css'
  ]
})
export class HomePage {
  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {
  }
}
