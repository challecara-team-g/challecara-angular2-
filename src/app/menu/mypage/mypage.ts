import {Component, Inject, forwardRef} from '@angular/core';
import {OnsSplitterContent} from 'ngx-onsenui';
import {MyApp} from '../app';
@Component({
  selector: 'ons-page[mypage]',
  template: require('./mypage.html'),
  styleUrls:['../src/app/mypage/mypage.css']
})
export class MyPage {
  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {
  }
}
