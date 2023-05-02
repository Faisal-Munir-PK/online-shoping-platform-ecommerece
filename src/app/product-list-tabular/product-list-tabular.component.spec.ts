import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTabularComponent } from './product-list-tabular.component';

describe('ProductListTabularComponent', () => {
  let component: ProductListTabularComponent;
  let fixture: ComponentFixture<ProductListTabularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListTabularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListTabularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
