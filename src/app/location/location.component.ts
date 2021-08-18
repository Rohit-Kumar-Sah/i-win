import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  allStates: { state_id: number; state_name: string }[] = [];
  allDistricts :{district_id:number ; district_name: string}[] =[];
  constructor(private http: HttpClient) { }
  choosenState: number | undefined;
  choosenDistrict: number | undefined;
  ngOnInit(): void {
    this.http
      .get<{ states: []; ttl: number }>(
        'https://cdn-api.co-vin.in/api/v2/admin/location/states'
      )
      .subscribe((data) => {
        console.log("raw state:",data);
        this.allStates = data.states;
      });

      
  }
  statesDropdown(){
    console.log(this.choosenState);
    this.http.get<{districts:{district_id:number ; district_name: string}[] ; ttl:number}>(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${this.choosenState}`).
    subscribe(data=>{
      console.log("raw district:",data);
    });
  }

  districtDropdown(){
    
  }
}
