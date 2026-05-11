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
    { id: 1001, name: 'Action' },
    { id: 1002, name: 'Racing' },
    { id: 1003, name: 'Sports' },
    { id: 1004, name: 'Horror' },
    { id: 1005, name: 'Adventure' }
  ];

  onCategorySelected(category: Category) {
    alert('Selected Category: ' + category.name);
  }
}