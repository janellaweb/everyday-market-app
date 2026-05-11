import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './category-menu-item.html',
  styleUrl: './category-menu-item.css'
})
export class CategoryMenuItem {

  @Input() categoryName = '';
  @Input() icon = '';

  @Output() itemclicked = new EventEmitter<string>();

  onItemClick() {
    this.itemclicked.emit(this.categoryName);
  }
}