import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalGraphComponent } from './horizontal-graph/horizontal-graph.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalGraphComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
