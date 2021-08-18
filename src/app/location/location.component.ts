import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  allStates: { state_id: number; state_name: string }[] = [];
  allDistricts: { district_id: number; district_name: string }[] = [];
  allSessions: {
    address: string,
    allow_all_age: boolean,
    available_capacity: number,
    available_capacity_dose1: number,
    available_capacity_dose2: number,
    block_name: string,
    district_name: Date,
    fee: string,
    fee_type: string,
    from: Date,
    to: Date,
    lat: number,
    long: number,
    min_age_limit: number,
    name: string,
    pincode: number,
    state_name: string,
    vaccine: String
    slots: []
  }[] = [];
  constructor(private http: HttpClient, private datePipe: DatePipe) { }
  choosenState: number | undefined;
  choosenDistrict: number | undefined;
  vaccineDate: Date | undefined;

  ngOnInit(): void {
    this.http
      .get<{ states: []; ttl: number }>(
        'https://cdn-api.co-vin.in/api/v2/admin/location/states'
      )
      .subscribe((data) => {
        console.log('raw state:', data);
        this.allStates = data.states;
      });
  }
  statesDropdown() {
    console.log(this.choosenState);
    this.http
      .get<{
        districts: { district_id: number; district_name: string }[];
        ttl: number;
      }>(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${this.choosenState}`
      )
      .subscribe((data) => {
        console.log('raw district:', data);
        this.allDistricts = data.districts;
      });
  }

  findByDistrict() {
    let fdate = this.datePipe.transform(this.vaccineDate, 'dd-MM-yyyy');
    this.http
      .get<{
        sessions: {
          address: string,
          allow_all_age: boolean,
          available_capacity: number,
          available_capacity_dose1: number,
          available_capacity_dose2: number,
          block_name: string,
          district_name: Date,
          fee: string,
          fee_type: string,
          from: Date,
          to: Date,
          lat: number,
          long: number,
          min_age_limit: number,
          name: string,
          pincode: number,
          state_name: string,
          vaccine: String
          slots: []
        }[]
      }>(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${this.choosenDistrict}&date=${fdate}`
      )
      .subscribe((data) => {
        this.allSessions = data.sessions;
        console.log(this.allSessions)
      });
  }
}
