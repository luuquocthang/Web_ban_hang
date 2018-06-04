import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  allProduct = [{
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
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/11_1.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  }, {
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
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/10.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  }, {
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
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/4.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  }, {
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
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/9.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  }, {
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
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/3.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  }, {
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
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/11_1.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  }, {
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
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/10.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  },
  {
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
    productImageUrl: "http://m.manigirl.com/web/product/medium/201805/822_shop1_343293.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  }, {
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
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/3.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  }, {
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
    productImageUrl: "http://theme.minwp.com/ahashop/wp-content/uploads/2017/02/5.jpg",
    productName: "ELEGANT PINK DRESS",
    productPrice: 150,
    productQuatity: 1,
    productSeller: "abc",
    ratings: 4
  }, {
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
  }];

  productList: any[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.productList = this.allProduct;
    if (name) {
      this.productList = [
        this.allProduct[0]
      ]
    }
  }
}
