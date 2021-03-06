import {Component, Inject, forwardRef} from '@angular/core';
import {OnsSplitterContent} from 'ngx-onsenui';
import {MyApp} from '../app';

@Component({
  selector: 'ons-page[menu]',
  template: require('./menu.html'),
})
export class MenuPage {

  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {
  }

}
