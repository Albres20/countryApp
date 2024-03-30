import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }
  public countries:Country[]=[];

  ngOnInit(): void {
  }
  searchByCapital(term:string):void{
    this.countriesService.searchCapital(term).subscribe(paises=>{
      this.countries=paises;
    });

  }

}
