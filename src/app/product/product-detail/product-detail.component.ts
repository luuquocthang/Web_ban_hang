import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product = {
    $key: "1",
    favourite: true,
    productAdded: 1,
    productCategory: "clother",
    productDescription: "We possess within us two minds. So far I have written only of the " +
      " conscious mind.I would now like to introduce you to your second mind, " +
      "the hidden and mysterious subconscious.Our subconscious mind contains such " +
      "power and complexity that it literally staggers the imagination.And finally the " +
      "subconscious is the mechanism through which thought impulses which are repeated regularly ",
    productId: 1,
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/6.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  };
  constructor() { }

  ngOnInit() {
  }

}
