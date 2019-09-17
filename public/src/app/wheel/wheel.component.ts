import { Component, OnInit } from '@angular/core';
import { ChooseService } from '../choose.service';
import { Router} from '@angular/router';
import {ApiService} from "../api.service";

declare const $: any;

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit{
  searchList: any;
  loc: {};
  winner:any;
  mobile: boolean = false;;
  wheelOptions: string[];
  businesses:any[];


  constructor(
    private chooseService: ChooseService,
    private _router: Router,
    private _apiService: ApiService
  ){}

  ngOnInit() {
    this.getLocation();
    this.wheelOptions = [];
    this.searchList =  this.chooseService.searchList;
    this.populateWheel();
    if(window.screen.width < 768){
      this.mobile = true;
    }
  }


  //ngx wheel takes in an array for spin options
  populateWheel(){
    if(!this.searchList) {
      this._router.navigate(['/']);
    }
    for(let i = 0; i < this.searchList.length; i++){
      this.wheelOptions.push(this.searchList[i]['value']);
    }
    this.winner = this.getWinner(this.searchList);
  }

  // randomly generate winner
  getWinner(array){
    let index = Math.floor(Math.random() * Math.floor(array.length));
    return array[index];
  }

  //yelp api call sent to service
  yelpQuery(){
    let searchTerm = "?term=";
    let latitude = "&latitude=";
    let longitude = "&longitude=";
    let searchQuery = "";

    searchQuery += searchTerm + this.winner['value'] + latitude + this.loc['lat'] + longitude + this.loc['lng'];


      this._apiService.search(searchQuery).subscribe(data=>{
        this.businesses = data['businesses'];
        setTimeout(function(){ $("#searchResults").modal("toggle")}, 100);
      })
  }


  //get geolocation for yelp api call
  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( location=>{
        this.loc = {lat:location.coords['latitude'], lng:location.coords['longitude']};
        if(this.loc['lat'] == null || this.loc['lng'] == null){
          alert("Enabling location will return results of the winning entry.")
        }
      });

    }
    else {
      alert("You should allow location or this app wouldn't really work the way it's supposed to.")
    }
  }

  reSpin(){
    this.wheelOptions = [];
    this.populateWheel();
  }




}
