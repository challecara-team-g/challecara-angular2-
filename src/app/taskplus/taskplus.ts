import {Component, Inject, forwardRef} from '@angular/core';
import {MyApp} from '../app';
@Component({
  selector: 'ons-page[taskplus]',
  template: require('./taskplus.html'),
})
export class TaskPlusPage {
  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {
  }
}
