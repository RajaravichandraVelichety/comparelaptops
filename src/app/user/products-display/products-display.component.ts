import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import { DataService } from 'src/app/data.service'
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.scss']
})
export class ProductsDisplayComponent implements OnInit {
  brandproducts= [];
  brandname: string;
  message:string;
  totalItems=20;
  //brandnamer:string;

  constructor(private DataService: DataService,private router: Router,route:ActivatedRoute) { 
        //this.DataService.currentMessage.subscribe(brandnamer => this.brandnamer = brandnamer);
        
          route.params.subscribe(params =>{


                 this.brandname = params['brand'];
                 
                // this.sendData(this.brandname);
                this.getbrandProducts(this.brandname);
                

          });

          this.router.routeReuseStrategy.shouldReuseRoute= function(){
            return false;
          };
   }

  ngOnInit() {
  }


  getbrandProducts(message):void{
   
   var brander :string= message;
   
    
   this.DataService.getbrandProducts(brander).then(brandproducts => this.brandproducts= brandproducts);
  }

  sendData(brandnamer){
    
    this.DataService.changeMessage(brandnamer);
  }
  

}
