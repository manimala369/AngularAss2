import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <p>
      There are 5 products!
    </p>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
