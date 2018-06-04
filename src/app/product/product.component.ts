import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  categories: any[] = [
    {
      name: "Category 1",
      expanded: true,
      subCategories: [
        {
          name: "Sub Category 1"
        },
        {
          name: "Sub Category 2"
        },
        {
          name: "Sub Category 3"
        },
        {
          name: "Sub Category 4"
        },
        {
          name: "Sub Category 5"
        },
      ]
    },
    {
      name: "Category 2",
      expanded: true,
      subCategories: [
        {
          name: "Sub Category 1"
        },
        {
          name: "Sub Category 2"
        },
        {
          name: "Sub Category 3"
        },
        {
          name: "Sub Category 4"
        },
        {
          name: "Sub Category 5"
        },
      ]
    },
    {
      name: "Category 3",
      expanded: true,
      subCategories: [
        {
          name: "Sub Category 1"
        },
        {
          name: "Sub Category 2"
        },
        {
          name: "Sub Category 3"
        },
        {
          name: "Sub Category 4"
        },
        {
          name: "Sub Category 5"
        },
      ]
    },
    {
      name: "Category 4",
      expanded: true,
      subCategories: [
        {
          name: "Sub Category 1"
        },
        {
          name: "Sub Category 2"
        },
        {
          name: "Sub Category 3"
        },
        {
          name: "Sub Category 4"
        },
        {
          name: "Sub Category 5"
        },
      ]
    },
    {
      name: "Category 5",
      expanded: true,
      subCategories: [
        {
          name: "Sub Category 1"
        },
        {
          name: "Sub Category 2"
        },
        {
          name: "Sub Category 3"
        },
        {
          name: "Sub Category 4"
        },
        {
          name: "Sub Category 5"
        },
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
