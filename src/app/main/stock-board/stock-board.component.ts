import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-stock-board',
  templateUrl: './stock-board.component.html',
  styleUrls: ['./stock-board.component.css']
})
export class StockBoardComponent implements OnInit {
  data:any=[];
  dataKey=["stockId","stockName","location","avaliable","booked","price"];
  newStock={
    "stockName":"",
    "location":"",
    "avaliable":null,
    "booked":null,
    "price":""
}
  isAddStock:boolean=false;
  stockName:String;
  willDownload = false;
  isEditStock:boolean=false;
  editIndex;
  constructor(private toaster:ToastrService,private eleRef:ElementRef,private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.data);
    this.loadStockBoard();
    
  }
  loadStockBoard(){
    this.http.get("http://localhost:8087/stock/get").subscribe((data=>{
      this.data=data;
      console.log(this.data);
      
    }))
  }

  addStock(){
    this.isAddStock=!this.isAddStock
  }
  submitStock(){
    console.log("caled");
    
    if (this.newStock['stockName']&&this.newStock['location']&&this.newStock['avaliable']&&this.newStock['booked']&&this.newStock['price']) {
    this.data=[...this.data,this.newStock]
    console.log(this.data);
    console.log(this.newStock);
    this.isAddStock=false
    } else {
      this.toaster.error("Invalid stock")
    }
  }

  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      console.log(jsonData);
      if (jsonData['stocksheet']) {
        jsonData['stocksheet'].forEach(element => {
        
          this.data= [...this.data,element];
        });
  
      } else {
        this.toaster.error("Invalid Excel")
      }
      
      const dataString = JSON.stringify(jsonData);
      // document.getElementById('output').innerHTML = dataString
      //   .slice(0, 300)
      //   .concat('...');
      this.setDownload(dataString);
    };
    reader.readAsBinaryString(file);
  }

  setDownload(data) {
    this.willDownload = true;
    setTimeout(() => {
      const el = document.querySelector('#download');
      el.setAttribute(
        'href',
        `data:text/json;charset=utf-8,${encodeURIComponent(data)}`
      );
      el.setAttribute('download', 'xlsxtojson.json');
    }, 1000);
  }

  editStock(index){
    this.isEditStock=!this.isEditStock;
    if (this.isEditStock) {
      this.editIndex=index;
      
    } else {
      this.editIndex=null
    }

  }

  deleteStock(index){
   this.data.splice(index,1)
  //  let temp= this.data;
  //  delete this.data[index]
  //  this.data.pop();
    console.log(this.data);
  }
}
