import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  list = [
    { name: 'Dashboard', icon: 'home'},
    { name: 'User', icon: 'face'}
  ];

}
