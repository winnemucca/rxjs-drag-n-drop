import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DragNDropDirective } from './drag-ndrop.directive';

//services

import { DragNDropService } from './drag-ndrop.service';
import { DropTargetDirective } from './drop-target.directive';
import {DragulaModule} from "ng2-dragula";
import { RxDirectiveDirective } from './rx-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DragNDropDirective,
    DropTargetDirective,
    RxDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [
    DragNDropService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
