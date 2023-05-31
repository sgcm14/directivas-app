import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ProductosLayoutComponent } from './layout/productos-layout/productos-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductosLayoutComponent,
    children: [
      { path: 'agregar', component: AgregarComponent },
      { path: '**', redirectTo: 'agregar' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
