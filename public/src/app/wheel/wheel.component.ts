import { Component, OnInit } from '@angular/core';
import { ChooseService } from '../choose.service';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit{
  searchList: any[];
  winner:any;
  wheelOptions: string[];
  width = 2;


  constructor(
    private chooseService: ChooseService
  ){}

  ngOnInit() {
    this.wheelOptions = [];
    this.getSearchList();
  }

  getSearchList(){
    this.searchList =  this.chooseService.searchList;
    for(let i = 0; i < this.searchList.length; i++){
      this.wheelOptions.push(this.searchList[i]['value']);
    }
    this.winner = this.getWinner(this.searchList);
  }
  getWinner(array){
    let index = Math.floor(Math.random() * Math.floor(array.length));
    return array[index];
  }
}
