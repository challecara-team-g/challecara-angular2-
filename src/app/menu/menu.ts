import {Component, Inject, forwardRef} from '@angular/core';
import {OnsSplitterContent} from 'ngx-onsenui';
import {MyApp} from '../app';

@Component({
  selector: 'ons-page[menu]',
  template: `
  <div class="content">
    <ons-button (click)="app.load('mypage')">
      <div class="picture">
        picture
      </div>


      <p class="name">name</p>
      <p class="id">id</p>

    </ons-button>
  </div>
  <style>
  ons-button{
    position: absolute;
    width: 237px;
    height: 72px;
    left: 0px;
    top: 0px;
    background: #1A557F;
  }
  div.picture{
    position: absolute;
    width: 54px;
    height: 54px;
    left: 16px;
    top: 8px;

    background: white;
    border-radius: 9px;
  }
  p{
    position: absolute;
    width: 70px;
    height: 22px;
    left: 83px;


    font-style: normal;
    font-weight: normal;
    line-height: normal;
    text-align:left;
    letter-spacing: 0.012em;

    color: #FFFFFF;

  }
  .name{
    top:0px;
    font-size:18px;
  }
  .id{
    top:23px
  }


  </style>
  `

})
export class MenuPage {

  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {
  }

}
