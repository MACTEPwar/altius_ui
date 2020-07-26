import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TopTabService} from '../../modules/topTab/toptab.service';
import {NaclService} from '../../services/concrete/nacl.service';
import {ActivatedRoute, Router} from '@angular/router';
import {pluck} from 'rxjs/operators';
import {Nacl} from '../../models/doc.nacl';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {ProductSheetComponent} from './sheet.component';
import {TopTabPageComponent} from '../../modules/topTab/toptabpage.component';
import { AuthenticationService } from 'src/app/modules/authentication/services/concrete/authentication.service';

@Component({
  templateUrl: 'nacl.component.html',
  providers: [NaclService]
})
export class NaclComponent extends TopTabPageComponent implements OnInit, AfterViewInit {
  data: any = [];
  fields = [];
  id = 0;
  doc: Nacl;
  loading = true;

  constructor(
    authenticationService: AuthenticationService,
    toptabService: TopTabService,
    protected service: NaclService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected bottomSheet: MatBottomSheet,
  ) {
    super(authenticationService, toptabService);
  }

  ngOnInit() {
    this.route.params.pipe(pluck('id')).subscribe(id => {
      this.id = id;
      this.url = '/nacl/' + this.id;
      this.title = 'Накладная №' + this.id;
    });
    super.ngOnInit();
  }

  ngAfterViewInit() {
    this.refreshData(null);
  }

  refreshData(event?) {
    this.loading = true;
    this.service.getNacl(this.id)
      .pipe()
      .subscribe(doc => {
        this.doc = doc as Nacl;
        // console.log(this.doc);
      });
    this.service.getNaclProducts(this.id)
      .pipe()
      .subscribe(data => {
        this.data = data;
        // console.log(this.data);
        if (this.data.length > 0)
          this.fields = Object.keys(data[0]);
        this.loading = false;
      });
  }

  showModal() {
    this.bottomSheet.open(ProductSheetComponent, {data: this.data});
  }
}
