import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-stock-board',
  templateUrl: './stock-board.component.html',
  styleUrls: ['./stock-board.component.css']
})
export class StockBoardComponent implements OnInit {
  data=[
    {
        "stockName":"TRP",
        "location":"Chennai",
        "avaliable":120,
        "booked":10,
        "price":"$125.22"
    },{
        "stockName":"ESD",
        "location":"Pune",
        "avaliable":220,
        "booked":134,
        "price":"$4546.265"
    },{
        "stockName":"CGI",
        "location":"Chennai",
        "avaliable":3420,
        "booked":1035,
        "price":"$1232.2"
    },{
        "stockName":"RRT",
        "location":"Kerala",
        "avaliable":435,
        "booked":40,
        "price":"$1232.23"
    },{
        "stockName":"UQI",
        "location":"Bangalore",
        "avaliable":1320,
        "booked":110,
        "price":"$455.23"
    }
    
    ];
  dataKey=["stockName","location","avaliable","booked","price"];
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
  constructor(private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  addStock(){
    this.isAddStock=!this.isAddStock
  }
  submitStock(){
    console.log("caled");
    
    if (this.newStock['stockName']) {
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
}
