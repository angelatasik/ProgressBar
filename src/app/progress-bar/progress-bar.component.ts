import { Component, Input, OnInit } from '@angular/core';
import users from 'src/app/users/users.json'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  item = '';
  public UsersList:{name:string}[] = users;
  
  addItem(newItem: string) {
    this.item = newItem;
    parseInt(this.item)
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
