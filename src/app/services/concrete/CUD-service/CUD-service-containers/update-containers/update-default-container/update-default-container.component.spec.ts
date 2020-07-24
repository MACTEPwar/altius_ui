import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDefaultContainerComponent } from './update-default-container.component';

describe('UpdateDefaultContainerComponent', () => {
  let component: UpdateDefaultContainerComponent;
  let fixture: ComponentFixture<UpdateDefaultContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDefaultContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDefaultContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
