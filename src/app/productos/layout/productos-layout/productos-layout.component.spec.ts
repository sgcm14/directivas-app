import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ProductosLayoutComponent } from 'src/app/productos/layout/productos-layout/productos-layout.component';
import { SideMenuComponent } from 'src/app/side-menu/side-menu.component';

describe('ProductosLayoutComponent', () => {
  let component: ProductosLayoutComponent;
  let fixture: ComponentFixture<ProductosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SideMenuComponent, RouterModule ],
      declarations: [ ProductosLayoutComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: {} }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
