import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  @Input()
  public placeholder: string='';
  @Output() 
  public onValue = new EventEmitter<string>();

  emitValue(value: string):void{
    this.onValue.emit(value);
  }

}