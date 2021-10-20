import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-board',
  templateUrl: './stock-board.component.html',
  styleUrls: ['./stock-board.component.css']
})
export class StockBoardComponent implements OnInit {
  books: [];
  isAddStock:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  addStock(){
    this.isAddStock=!this.isAddStock
  }
  submitStock(){
    
  }
}
