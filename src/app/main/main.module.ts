import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StockBoardComponent } from './stock-board/stock-board.component';
import { StockImportComponent } from './stock-import/stock-import.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StockBoardComponent, StockImportComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    FontAwesomeModule,
    MainRoutingModule

  ]
})
export class MainModule { }
