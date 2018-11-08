import {Component, Inject, forwardRef, OnInit} from '@angular/core';
import {OnsSplitterContent} from 'ngx-onsenui';
import {MyApp} from '../app';
import { WEEK } from '../mock-weeks';
import { Week } from '../week';
import { TASKCONTENT } from '../mock-tasks';
import { TaskContent } from '../task-content';

@Component({
  selector: 'ons-page[home]',
  template: `
  <ons-toolbar>
    <div class="center">
      <ons-select>
        <option *ngFor="let week of weeks">{{week.day}}</option>
      </ons-select>
    </div>
    <div class="left">
      <ons-toolbar-button (click)="app.load('menu')">
        <ons-icon icon="ion-navicon, material:md-menu"></ons-icon>
      </ons-toolbar-button>
    </div>
    <div class="right">
      <ons-toolbar-button (click)="app.load('taskplus')">
        <ons-icon icon="fa-plus"></ons-icon>
      </ons-toolbar-button>
    </div>
  </ons-toolbar>
  <div class="background"></div>
  <div class="content">
    <div *ngFor="let task of tasks" modifier="task">
      <ons-button >
        <p>{{task.picture}}</p>
        <p>{{task.title}}</p>
        <p>{{task.user_id}}</p>
      </ons-button>
    </div>
  </div>

  <style>
  ons-button{
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 41.6%;
  height: 175px;
  background: #F4F4F4;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  float:left;
  margin: 15.75px;
  }


  p{
    text-align: center;
    color:red;
  }

  </style>
  `,
  
})

export class HomePage implements OnInit{

  weeks=WEEK;
  tasks=TASKCONTENT;

  constructor(@Inject(forwardRef(() => MyApp)) private app : MyApp) {
  }
}
