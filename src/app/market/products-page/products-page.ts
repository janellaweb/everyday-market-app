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

  selectedCategory?: Category;

  categoryList: Category[] = [

    {
      id: 1001,
      name: 'Action',
      icon: '/images/action.svg',
      description: 'Action games are fast-paced and full of combat, missions, and exciting challenges. Players must react quickly and complete objectives under pressure.'
    },

    {
      id: 1002,
      name: 'Racing',
      icon: '/images/racing.svg',
      description: 'Racing games focus on speed, competition, and precision driving. Players compete against opponents across different tracks and environments.'
    },

    {
      id: 1003,
      name: 'Sports',
      icon: '/images/sports.svg',
      description: 'Sports games recreate real-world sports such as soccer, basketball, and football. Players can control teams, compete in tournaments, and improve their skills.'
    },

    {
      id: 1004,
      name: 'Horror',
      icon: '/images/horror.svg',
      description: 'Horror games create suspense through dark environments, survival mechanics, and mystery. Players must solve problems while avoiding dangerous situations.'
    },

    {
      id: 1005,
      name: 'Adventure',
      icon: '/images/adventure.svg',
      description: 'Adventure games focus on exploration, storytelling, and completing quests. Players discover new worlds, interact with characters, and uncover hidden secrets.'
    }

  ];

  onCategorySelected(category: Category) {
    this.selectedCategory = category;
  }
}