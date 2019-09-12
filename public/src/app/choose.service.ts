import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChooseService {
  public searchList: any[];
  constructor() { }


  setSearch(list: any[]){
    this.searchList = list;
  }
}
