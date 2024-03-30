import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }
  public countries:Country[]=[];
  ngOnInit(): void {
  }
  searchByPais(term:string):void{
    this.countriesService.searchPais(term).subscribe(paises=>{
      this.countries=paises;
    });

  }
}
