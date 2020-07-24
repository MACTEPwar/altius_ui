import {Component, Directive, OnInit} from '@angular/core';
import {TopTabService} from '../../services/concrete/toptab.service';
import {BaseComponent} from './base.component';
import {stirng2faIcon} from '../../services/helpers/helper-functions';
import { AuthenticationService } from 'src/app/modules/authentication/services/concrete/authentication.service';

@Directive()
// tslint:disable-next-line:directive-class-suffix
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
