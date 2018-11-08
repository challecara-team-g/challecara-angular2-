import {Component, Inject, forwardRef} from '@angular/core';
import {MyApp} from '../app';
@Component({
  selector: 'ons-page[taskplus]',
  template:
  `
  <ons-toolbar>
     <div class="left">
       <ons-toolbar-button>
         <ons-icon icon="fa-long-arrow-left"></ons-icon>
      </ons-toolbar-button>
    </div>
  </ons-toolbar>
  <body>
    <div id="wrap">
    <div class="box">
      <div class="icon">
      </div>
      <p class="title">Title</p>
      <input type="text" class="title">
      <p class="user">AssignUser</p>
      <input type="text" class="user">
      <p class="comment">Comment</p>
      <textarea class="comment" id=""></textarea>
    </div>
    <ons-button class="make">Complete</ons-button>

  </div>

  </body>

  <style>
  body{
    width:100%; /*ページ全体の幅は100%と指定する*/
    text-align:center; /*ページ全体を中央揃えにする*/
  }
  #wrap{
    width: 320px;	   /*全体の幅を指定する*/
    margin: 0 auto;    /*マージンの指定をする、ブラウザ対策*/
    text-align:center;   /*全体を左揃えにする。*/
  }
  div.box{
    position: absolute;
    width: 320px;
    height: 427px;

    top: 65px;

    background: #277FBF;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
  div.icon{
    position: absolute;
    width: 100px;
    height: 100px;
    left: 111px;
    top: -50px;

    background: black;
    border-radius: 50%;
  }
  ons-button{
    position: relative;
    width: 275px;
    height: 44px;

    top: 525px;
    text-align: center;
    background: #34AAFF;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 26px;
  }
  p{
    position: absolute;
    width: 69px;
    height: 24px;
    left: 40px;
    top: 196px;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    font-size: 24px;
    letter-spacing: 0.012em;

    color: #FFFFFF;

  }
  p.title{
    top: 50px;
  }

  p.user{
    top: 142px;
  }
  p.comment{
    top: 234px;
  }

  input{
    position: absolute;
    width: 240px;
    height: 32px;
    left: 40px;


    background: rgba(255, 255, 255, 0.27);
    border-radius: 5px;

  }
  input.title{
    top: 110px;
  }
  input.user{
    top: 202px;
  }
  textarea{
    position: absolute;
    width: 240px;
    height: 90px;
    left: 40px;
    top: 294px;

    background: rgba(255, 255, 255, 0.27);
    border-radius: 5px;

  }


  </style>
  `,
})
export class TaskPlusPage {
  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {
  }
}
