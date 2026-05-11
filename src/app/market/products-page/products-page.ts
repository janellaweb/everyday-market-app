import { Component } from '@angular/core';

import { Category } from '../models/category';
import { CategoryMenu } from '../category-menu/category-menu';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CategoryMenu],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css'
})
export class ProductsPage {

  categoryList: Category[] = [
  {
    id: 1001,
    name: 'Action',
    icon: '/images/action.svg'
  },

  {
    id: 1002,
    name: 'Racing',
    icon: '/images/racing.svg'
  },

  {
    id: 1003,
    name: 'Sports',
    icon: '/images/sports.svg'
  },

  {
    id: 1004,
    name: 'Horror',
    icon: '/images/horror.svg'
  },

  {
    id: 1005,
    name: 'Adventure',
    icon: '/images/adventure.svg'
  }
];

  onCategorySelected(category: Category) {
    alert('Selected Category: ' + category.name);
  }
}