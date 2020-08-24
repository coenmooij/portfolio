import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

const COMPONENTS = [
  SidebarComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {
}
