import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  template: `
  <ul class="item">
  <li (click)="onSelect(productdetails)" *ngFor="let productdetail of productdetails">
    <span >{{productdetail.id}}</span> {{productdetail.name}}
  </li>
</ul>

  `,
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  router: any;
  

  constructor(private route: ActivatedRoute) { }

  public productdetails = [
    {"id": 1, "name": "food"},
    {"id": 2, "name": "drinks"},
    {"id": 3, "name": "biscuit"},
    {"id": 4, "name": "chocolate"},
    {"id": 5, "name": "cake"}
  ]

  ngOnInit() {
  }
  onSelect(productdetail){
    // from neviate from code to rooute we need router service
    this.router.navigate(['/productdetails', productdetail.id]);
  }


}
