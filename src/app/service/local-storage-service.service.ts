import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {



  constructor() { }

  setData(key,value){
    console.log(key,value);
    
    localStorage.setItem(key,value);
  }
  getData(key){
    return localStorage.getItem(key);
  }

}
