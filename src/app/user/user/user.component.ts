import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private DataService: DataService) { }

    brands=[];
    searchitem:string;

  ngOnInit() {
       this.getCollections();
  }
  getCollections():void{
    
    this.DataService.getCollections().then(brands=>this.brands= brands);
    
    
  }

  searchProducts(){
    search=>this.searchitem;
  }

}
