import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Usuario', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' },
  // ]

  public menuItems = signal<MenuItem[]>([
    { title: 'Productos', route: '/productos/agregar' },
    { title: 'Contador', route: '/signals/counter' },
    { title: 'Usuario', route: '/signals/user-info' },
    { title: 'Mutaciones', route: '/signals/properties' },
  ]);


}
