// Onsen UI Styling and Icons
require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'ngx-onsenui';

import {MyApp} from './app/app';
import {HomePage} from './app/home/home';
import {MenuPage} from './app/menu/menu';
import {TaskPlusPage} from './app/taskplus/taskplus';

// Enable production mode when in production mode.
if (__PROCESS__.PROD) enableProdMode();


@NgModule({
    imports: [
        OnsenModule, // has BrowserModule internally
        HttpModule,
    ],
    declarations: [
        MyApp,
        HomePage,
        MenuPage,
        TaskPlusPage,
    ],
    entryComponents: [
        HomePage,
        MenuPage,
        TaskPlusPage,
    ],
    bootstrap: [
        MyApp,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
class AppModule {}

if (module['hot']) module['hot'].accept();

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
