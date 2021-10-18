import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockBoardComponent } from './stock-board/stock-board.component';


const routes: Routes = [{
  path:'',
  component:StockBoardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
