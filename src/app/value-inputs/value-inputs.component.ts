import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-value-inputs',
  templateUrl: './value-inputs.component.html',
  styleUrls: ['./value-inputs.component.css']
})
export class ValueInputsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
