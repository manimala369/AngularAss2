import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productlist',
  template: `
  <h3>you selected dept with id {{deptId}}</h3>`,
  styles: []
})
export class ProductlistComponent implements OnInit {

  public productId; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
  }

}
