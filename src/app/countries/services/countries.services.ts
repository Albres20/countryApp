import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable, catchError, map, of, tap } from "rxjs";
import {Country} from "../interface/country"
@Injectable({providedIn: 'root'})
export class CountriesService{

    private apiUrl:string ='https://restcountries.com/v3.1';
    constructor(private http:HttpClient){
    }

    private getCountriesRequest(url:string):Observable<Country[]>{
        return this.http.get<Country[]>(url).pipe(catchError(err=>of([])));
    }
    searchCountryByAlphaCode(code: string): Observable<Country | null>{
        const url=`${this.apiUrl}/alpha/${ code }`;
        // el pipe permite la ejecución de datos asincronos
        return this.http.get<Country[]>(url).pipe(
            map(countries=>countries.length>0 ? countries[0]:null),
            catchError(err=>of(null))
           /*  tap(pipePaises=>console.log("Paso por el tap", pipePaises)),
            map(pipePaises=>[]) //map me permite null la salida*/
        );
    }
    
    searchCapital(term: string): Observable<Country[]>{
        const url=`${this.apiUrl}/capital/${ term }`;
        // el pipe permite la ejecución de datos asincronos
        return this.http.get<Country[]>(url).pipe(
            catchError(err=>of([]))
           /*  tap(pipePaises=>console.log("Paso por el tap", pipePaises)),
            map(pipePaises=>[]) //map me permite null la salida*/
        );
        
        

    }
    searchPais(term: string): Observable<Country[]>{
        const url=`${this.apiUrl}/name/${ term }`;
        // el pipe permite la ejecución de datos asincronos
        return this.getCountriesRequest(url);
        
        

    }
    searchRegion(term: string): Observable<Country[]>{
        const url=`${this.apiUrl}/subregion/${ term }`;
        // el pipe permite la ejecución de datos asincronos
        return this.http.get<Country[]>(url).pipe(
            catchError(err=>of([]))
           /*  tap(pipePaises=>console.log("Paso por el tap", pipePaises)),
            map(pipePaises=>[]) //map me permite null la salida*/
        );
        
        

    }
    
}