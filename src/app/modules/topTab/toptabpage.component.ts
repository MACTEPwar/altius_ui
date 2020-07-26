import {Component, Directive, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/services/concrete/authentication.service';
import {TopTabService} from '../topTab/toptab.service';
import {BaseComponent} from './base.component';
import {stirng2faIcon} from '../../services/helpers/helper-functions';

@Directive()
export abstract class TopTabPageComponent extends BaseComponent implements OnInit {
  fields = [];

  title = '';
  url = '';
  image = null;

  protected constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService
  ) {
    super(authenticationService, toptabService);
  }

  ngOnInit(): any {
    // if (!this.isChildren) {
      if (!this.toptabService.findTabByUrl(this.url)) {
        this.toptabService.addTab({
          name: this.title,
          image: stirng2faIcon(this.image),
          url: this.url,
          canClose: true,
          active: true
        });
      } else {
        this.toptabService.activateTab(this.toptabService.tabList.find(f => f.url === this.url));
      }
    // }
  }

}
