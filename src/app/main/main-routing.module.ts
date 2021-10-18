import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { StockBoardComponent } from './stock-board/stock-board.component';
import { StockImportComponent } from './stock-import/stock-import.component';


const routes: Routes = [{
  path:'',
  component:NavbarComponent,
  children:[{
    path:'stock',
    component:StockBoardComponent
  },
  {
    path:'stockimport',
    component:StockImportComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
