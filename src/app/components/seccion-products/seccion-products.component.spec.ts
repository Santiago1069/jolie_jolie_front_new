import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionProductsComponent } from './seccion-products.component';

describe('SeccionProductsComponent', () => {
  let component: SeccionProductsComponent;
  let fixture: ComponentFixture<SeccionProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
