import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { SharedModule } from '../shared/shared.module';
import { ProductosLayoutComponent } from './layout/productos-layout/productos-layout.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ProductosLayoutComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SideMenuComponent
  ]
})
export class ProductosModule { }
