import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(private router: Router) {}
  back() {
    this.router.navigate(['users']);
  }

  next() {
    this.router.navigate(['success']);
  }
}
