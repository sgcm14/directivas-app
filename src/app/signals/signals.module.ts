import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    SideMenuComponent
  ]
})
export class SignalsModule { }
