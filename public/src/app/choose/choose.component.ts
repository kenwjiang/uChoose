import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {
  numOptions: number[];
  searchType: string;
  searchValue: string;
  searchQuery: any[];


  constructor() { }

  ngOnInit() {
    this.numOptions=[];
    this.searchQuery= [];
  }

  selected(event: any){
    this.numOptions=[];
    for(let i=1; i <= event.target.value;i++){
      this.numOptions.push(i);
    }
  }

  setSearchType(event: any){
    this.searchType=event.target.value;
  }

  addToQuery(){
    this.searchQuery.push({searchType: this.searchType, searchValue: this.searchValue});
    console.log(this.searchQuery);
    this.searchValue='';
  }

}
