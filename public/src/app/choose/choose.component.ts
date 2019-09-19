import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router} from '@angular/router';
import { ChooseService } from '../choose.service';





@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  searchInput:string;
  searchList: any[];
  hover: boolean;
  toolTip: string;

  constructor(
    private ngFlashMessageService: NgFlashMessageService,
    private _router: Router,
    private chooseService: ChooseService,

  ) { }

  ngOnInit() {
    this.searchInput = "";
    this.searchList=[];
    this.hover=false;
    this.toolTip = `<h5>Welcome to uChoose</h5>\n<p>Input values for type of foods you want to eat, restaurants you want to choose from, or various entertainment values to choose from. Enter 3-10 options then press the spin button. The app will randomly select a winner and display nearest businesses with the winning value in your area, powered by yelp. </p>\n <p><strong>Please enable location when prompted!</strong></p>`
  }



  // adding search query to search stack then clearing search query variable
  addToQuery(){
    if(this.searchInput=="") {
      this.displayFlash(["Please enter a restaurant name or food type."]);
    } else {
      this.searchList.push({value: this.searchInput});
    }
    this.searchInput = "";
  }

  // no database so storing info in the service
  sendToWheel(){
    if(this.searchList.length  < 3){
      this.displayFlash("Must enter at least 3 choices!")
    } else {
      this.chooseService.setSearch(this.searchList);
      this._router.navigate(['/wheel']);
    }
  }

  // remove option
  removeItem(item){
    this.searchList.splice(this.searchList.indexOf(item), 1);
  }

  private displayFlash(message){
    this.ngFlashMessageService.showFlashMessage({
      messages:[message],
      dismissible: true,
      timeout: 3000,
      type: 'danger'
    })
  }


}
