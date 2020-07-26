import { Component, OnInit, ViewChild, ViewContainerRef, Type, ComponentFactoryResolver } from '@angular/core';
import { ITableService } from '../../../services/Interfaces/itable.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

// import { BanksComponent } from '../../../components/banks/banks.component';
import { EmployeeComponent } from '../../../components/employee/employee.component';

@Component({
  selector: 'app-create-default-container',
  templateUrl: './create-default-container.component.html',
  styleUrls: ['./create-default-container.component.scss'],
})
export class CreateDefaultContainerComponent implements OnInit {

  @ViewChild('bottomSidebarDialog', {read: ViewContainerRef}) bottomSidebarDialog: ViewContainerRef;

  service: ITableService;
  item: any;
  template: any = {};
  containerRef: any;
  profileForm = new FormGroup({});

  sidebarDisplay = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
    )
     {}

  ngOnInit(): void {
    this.service
      .getTemplate(false)
      .pipe()
      .subscribe((template) => {
        this.template = template;
        console.log(this.template);
        this.generateFormGroupByFullTemplate();
        console.log(this.profileForm);
      });
  }

  create(): void {
    this.service.putItem(this.profileForm.value).pipe().subscribe();
  }

  close(): void {
    this.containerRef.clear();
  }

  // TODO: доработать
  getTypeByBackType(type: string): Type<any> {
    // if (type === 'Firm') {
    //   return EmployeeComponent;
    // }
    // return BanksComponent;
    // return CurrencyComponent;
    return EmployeeComponent;
    return null;
  }

  displayLinkedData(type: string): void{

    this.bottomSidebarDialog.clear();
    const curType = this.getTypeByBackType(type);
    const tableComponent = this.componentFactoryResolver.resolveComponentFactory(curType);
    const tableComponentRef = this.bottomSidebarDialog.createComponent(tableComponent);
    (tableComponentRef.instance).isChildren = true;

    // (createDialogComponentRef.instance).service = this.service;
    // (createDialogComponentRef.instance).containerRef = this.dialogContainer;


    this.sidebarDisplay = true;
  }

  generateFormGroupByFullTemplate(): void {
    this.template.fields.forEach(field => {
      switch (field.type) {
        case 'String': {
          if (field.multilang) {
            const groups: FormGroup[] = [];
            this.getAllLanguages().forEach(language => {
              const tempGroup = new FormGroup({
                name: new FormControl(''),
                language: new FormControl(language.language)
              });
              groups.push(tempGroup);
            });
            this.profileForm.addControl(field.field[0].toLowerCase() + field.field.slice(1), new FormArray(groups));
          } else {
            this.profileForm.addControl(field.field[0].toLowerCase() + field.field.slice(1), new FormControl(''));
          }
          break;
        }
        // case 'DateTime': {
        //   this.profileForm.addControl(field.field[0].toLowerCase() + field.field.slice(1), new FormControl(''));
        //   break;
        // }
        case 'Int32': {
          this.profileForm.addControl(field.field[0].toLowerCase() + field.field.slice(1), new FormControl(''));
          break;
        }
        case 'Boolean': {
          this.profileForm.addControl(field.field[0].toLowerCase() + field.field.slice(1), new FormControl(false));
          break;
        }
        case 'Nullable`1': {
          this.profileForm.addControl(field.field[0].toLowerCase() + field.field.slice(1), new FormControl(''));
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  getEntityDescription(): string {
    return this.template.model;
  }

  // TODO: переместить в другое место, сделать общим методом
  getAllLanguages(): any[] {
    return [{
      language: 'en',
      description: 'Английский'
    }, {
      language: 'ru',
      description: 'Руский'
    }, {
      language: 'ua',
      description: 'Украинский'
    }];
  }
}
