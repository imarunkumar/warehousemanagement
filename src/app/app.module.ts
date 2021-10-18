import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentModule } from './common-module/common-component.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

import {
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { StockModule } from './module/stock-module';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  // fgsColor: "#5abe67",
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.rotatingPlane, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    CommonComponentModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
