import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuickModalComponent } from './product-quick-modal.component';

describe('ProductQuickModalComponent', () => {
  let component: ProductQuickModalComponent;
  let fixture: ComponentFixture<ProductQuickModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductQuickModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductQuickModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
