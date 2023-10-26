import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {

  constructor(private router: Router) {

  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
