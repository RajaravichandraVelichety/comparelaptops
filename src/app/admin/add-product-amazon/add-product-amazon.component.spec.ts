import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductAmazonComponent } from './add-product-amazon.component';

describe('AddProductAmazonComponent', () => {
  let component: AddProductAmazonComponent;
  let fixture: ComponentFixture<AddProductAmazonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductAmazonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
