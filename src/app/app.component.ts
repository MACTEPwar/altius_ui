import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAlienMonster } from '@fortawesome/pro-solid-svg-icons';
import { User } from './models/user';
import { TopTab } from './models/toptab';
import { TopTabService } from './services/concrete/toptab.service';
import { AuthenticationService } from './modules/authentication/services/concrete/authentication.service';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  currentUser: User;
  tabList: TopTab[] = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private topTabsSrvice: TopTabService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  faAlienMonster = faAlienMonster;

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.tabList = this.getTabs();
  }

  getTabs() {
    return this.topTabsSrvice.getTabs();
  }
}
