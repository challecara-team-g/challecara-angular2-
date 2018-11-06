import {Component, Inject, forwardRef} from '@angular/core';
import {OnsSplitterContent} from 'ngx-onsenui';
import {MyApp} from '../app';
import {Weeks} from '../week-mock'

@Component({
  selector: 'ons-page[home]',
  template: require('./home.html'),
  styleUrls:['../src/app/home/home.css']
})
export class HomePage implements OnInit{

  weeks=Weeks;

  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {
  }
}

//export const Tasks: Task[]=[
//  {index:1,title:'wash'},
//  {index:2,title:'clean'},
//  {index:3,title:'eat'}
//];
