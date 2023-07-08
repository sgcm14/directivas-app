import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SideMenuComponent } from 'src/app/side-menu/side-menu.component';

import { SignalsLayoutComponent } from 'src/app/signals/layout/signals-layout/signals-layout.component';

describe('SignalsLayoutComponent', () => {
  let component: SignalsLayoutComponent;
  let fixture: ComponentFixture<SignalsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SideMenuComponent, RouterModule ],
      declarations: [ SignalsLayoutComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: {} }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
