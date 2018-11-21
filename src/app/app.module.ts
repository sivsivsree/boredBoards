import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './core/material.module';
import {BoardComponent} from './board/board.component';
import {AppRoutingModule} from './core/routing.module';
import { BoardDetailComponent } from './board/board-detail/board-detail.component';
import { BoardnavComponent } from './board/boardnav/boardnav.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardDetailComponent,
    BoardnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
