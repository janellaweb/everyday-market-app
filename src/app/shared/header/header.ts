import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {

  router = inject(Router);

  goHome() {

    this.router.navigate(['/home']);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

  // Added goToRegister method to navigate to
  // the register page and scroll down to the form

  goToRegister() {

  this.router.navigate(['/register']).then(() => {

    setTimeout(() => {

      const element = document.getElementById('register-form');

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }

    }, 100);

  });

}

  goToProducts() {

    this.router.navigate(['/products']);

    setTimeout(() => {

      const categoriesSection =
        document.getElementById('categories-section');

      if (categoriesSection) {

        categoriesSection.scrollIntoView({
          behavior: 'smooth'
        });

      }

    }, 200);

  }

}