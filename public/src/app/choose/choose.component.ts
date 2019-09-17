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

  constructor(
    private ngFlashMessageService: NgFlashMessageService,
    private _router: Router,
    private chooseService: ChooseService,

  ) { }

  ngOnInit() {
    this.searchInput = "";
    this.searchList=[];
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

  private displayFlash(message){
    this.ngFlashMessageService.showFlashMessage({
      messages:[message],
      dismissible: true,
      timeout: 3000,
      type: 'danger'
    })
  }


}
