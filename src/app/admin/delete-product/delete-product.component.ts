import { Component, OnInit } from '@angular/core';
 
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import { DataService } from 'src/app/data.service'
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  brandproducts= [];
  brandname: string;
  message:string;

  constructor(private DataService: DataService,private router: Router,route:ActivatedRoute) { 

          route.params.subscribe(params =>{


                 this.brandname = params['brand'];
                 
                this.getbrandProducts(this.brandname);

          });

          this.router.routeReuseStrategy.shouldReuseRoute= function(){
            return true;
          };
  }

  ngOnInit() {
  }


  getbrandProducts(message):void{
   
   var brander :string= message;
   console.log(brander);
    
   this.DataService.getbrandProducts(brander).then(brandproducts => this.brandproducts= brandproducts);
  }

  deleteproduct(name){
    var productid=name;
    console.log(productid);
    this.DataService.deleteproduct(productid).then(response=>response);
  }

  

}
