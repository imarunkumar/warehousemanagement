import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StockBoardComponent } from './stock-board/stock-board.component';
import { StockImportComponent } from './stock-import/stock-import.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [StockBoardComponent, StockImportComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,

  ]
})
export class MainModule { }
