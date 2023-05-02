import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudBackgroundComponent } from './cloud-background.component';

describe('CloudBackgroundComponent', () => {
  let component: CloudBackgroundComponent;
  let fixture: ComponentFixture<CloudBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
