import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableItemComponent } from './table-item/table-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TableItemComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TableItemComponent
  ]
})
export class ComponentsModule { }
