import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  constructor(private countriesService:CountriesService ) { }

  public countries:Country[]=[];
  ngOnInit(): void {
  }
  searchByRegion(term:string):void{
    this.countriesService.searchRegion(term).subscribe(paises=>{
      this.countries=paises;
    });

  }
}
