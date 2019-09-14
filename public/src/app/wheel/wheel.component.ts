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
  location: {};
  winner:any;
  mobile: boolean = false;;
  wheelOptions: string[];
  businesses:any[];
  testLocation ={lng: "-121.9550085", lat:"37.4314693"}


  constructor(
    private chooseService: ChooseService,
    private _router: Router,
    private _apiService: ApiService
  ){}

  ngOnInit() {
    this.location={lng: "", lat: ""};
    this.wheelOptions = [];
    this.getSearchList();
    if(window.screen.width < 768){
      this.mobile = true;
    }
    $("#searchResults").modal();
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

  //yelp api call
  yelpQuery(){
    let searchTerm = "?term=";
    let latitude = "&latitude=";
    let longitude = "&longitude=";
    let searchQuery = "";

    searchQuery += searchTerm + this.winner['value'] + latitude + this.testLocation['lat'] + longitude + this.testLocation['lng'];


      this._apiService.search(searchQuery).subscribe(data=>{
        this.businesses = data['businesses'];
        setTimeout(function(){$("#searchResults").modal("toggle");}, 100);
      })

  }

  //get geolocation for yelp api call
  // getLocation(){
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(this.setLocation);
  //   }
  //   else {
  //     alert("You should allow location or this app wouldn't really work the way it's supposed to.")
  //
  //   }
  // }


  //private functions
  // private setLocation(position){
  //   this.location['lng'] = position.coords.longitude;
  //   this.location['lat'] = position.coords.latitude;
  // }



}
