import { Component } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  standalone: true,
  imports: [MatRippleModule, MatToolbarModule, MatIconModule, MatButtonModule],
})

export class SuccessComponent {
  centered = true;
  radius: number = 300;

  constructor(private router: Router) {}
  back() {
    this.router.navigate(['users']);
  }
}
