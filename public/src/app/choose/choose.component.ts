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
  searchQuery:{};
  searchList: any[];


  constructor(
    private ngFlashMessageService: NgFlashMessageService,
    private _router: Router,
    private chooseService: ChooseService
  ) { }

  ngOnInit() {
    this.searchQuery={type: "", value:""};
    this.searchList= [];
  }

  setSearchType(event:any){
    this.searchQuery['type'] = event.target.value;
  }

  addToQuery(){
    if(this.searchQuery['type']==""){
      this.displayFlash("Please select a 'search by' value.")
    }
    if(this.searchQuery['type'] == "restaurantName" && this.searchQuery['value']==""){
      this.displayFlash("Please enter a restaurant name.");
    } else if(this.searchQuery['type'] == "foodType" && this.searchQuery['value']==""){
      this.displayFlash("Please enter a food type.");
    }
    if(this.searchQuery['type'] != "" && this.searchQuery['value']!= ""){
      this.searchList.push({type: this.searchQuery['type'], value:this.searchQuery['value']});
      console.log(this.searchList);
    }
    this.searchQuery['value'] = "";
  }

  sendToWheel(){
    this.chooseService.setSearch(this.searchList);
    this._router.navigate(['/wheel']);
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
