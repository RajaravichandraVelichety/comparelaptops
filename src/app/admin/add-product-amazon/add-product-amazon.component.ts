import { Component, OnInit } from '@angular/core';
import { AmazonDataService  } from 'src/app/amazon-data.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from 'src/app/data.service'


@Component({
  selector: 'app-add-product-amazon',
  templateUrl: './add-product-amazon.component.html',
  styleUrls: ['./add-product-amazon.component.scss']
})
export class AddProductAmazonComponent implements OnInit {

  constructor(private AmazonDataService: AmazonDataService,public snackBar: MatSnackBar,private DataService:DataService) {


   }


  ngOnInit() {
  }

  pItemASIN:string;
  asincode:string;
  product=[];
  amznproduct=[];
  
  productDetails=[];
intoitem(){
this.AmazonDataService.getProductDetails(this.pItemASIN).then(product => this.product= product);
  
}

insertproduct(){

    

  for(let item of this.product){

     this.amznproduct['pageURL']=item.DetailPageURL[0];
     this.amznproduct['asin']=item.ASIN[0];
    for(let at of item.ItemAttributes){
    this.amznproduct['title']=at.Title[0];
    this.amznproduct['brand']=at.Brand[0];
    this.amznproduct['model']=at.Model[0];
    this.amznproduct['features']=at.Feature[0];
    }
    for(let offer of item.OfferSummary){
      for(let pt of offer.LowestNewPrice){
      this.amznproduct['price']=pt.FormattedPrice[0];
      }
    }
  }
  console.log(this.amznproduct);
  this.DataService.insertAmazonItem(this.amznproduct).then(response=>{this.productDetails.push(response);});  
}


  openSnackBar() {
    this.snackBar.open('Data stored succesfully');
  }

}
