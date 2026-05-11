## Everyday Market App

## Overview
This project is called Everyday Market App, customized as Janella's Gaming Market. The application displays different PS5 game categories using reusable standalone components.

This project followed the instructions in the assignment.

## The project demonstrates:

•	Angular standalone components
•	Angular CLI project setup
•	Property binding
•	Event binding
•	@Input() and @Output()
•	EventEmitter
•	Angular control flow syntax using @for and @if
•	Parent-child component communication
 
## Folder Structure

src/app/shared
src/app/market
•	shared contains reusable global components.
•	market contains product and category-related components.
 
Components Created
ng g c shared/header
ng g c market/products-page
ng g c market/category-menu
ng g c market/category-menu-item

All components use Angular standalone as required.
 
## Features Implemented

AppComponent
•	Imports Header and ProductsPage
•	Displays components using selectors in app.html

HeaderComponent
•	Custom gaming-themed design
•	Uses custom hero image
•	Includes personalized title: Janella's Gaming Market
•	Smooth scrolling Browse Categories button

ProductsPageComponent
•	Parent component of CategoryMenu
•	Uses a hard-coded list of 5 gaming categories
•	Passes category data using property binding:

[categories]="categoryList"
•	Uses event binding:

(categorySelected)="onCategorySelected($event)"
•	Displays alert when category is selected

CategoryMenuComponent

•	Receives data using @Input()
•	Emits events using @Output() and EventEmitter
•	Uses Angular @for syntax to display category cards
•	Uses Angular @if syntax for conditional rendering

CategoryMenuItemComponent
•	Receives category name and icon using @Input()
•	Emits click events using @Output() and EventEmitter
•	Displays SVG category icons
 
## Categories Used
•	Action
•	Racing
•	Sports
•	Horror
•	Adventure

## Testing

Tested using ng test and ng lint
 
## Running the Project

Install this first:

npm install

Then Run it: 

ng serve

Open in browser:
http://localhost:4200
 
Notes
The node_modules folder is deleted. Please run: npm install

Author: 

Submitted by Janella Quizon for Assignment 1 for Front End Frameworks.
I confirm that I have used ChatGPT and your demos to help me comply and understand the assignment. I also used my experience as a Graphic
Designer to make it look appealing in a way. Thank you very much! 
