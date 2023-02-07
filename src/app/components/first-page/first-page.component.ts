import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  backHome() {
    this.route.navigate(['/app-homepage']);
  }
}
