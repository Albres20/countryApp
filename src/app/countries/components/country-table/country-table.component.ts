import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
     `
    img{
      width:25px;
    }` 
  ]
})

export class CountryTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public countries: Country[]=[];

}
