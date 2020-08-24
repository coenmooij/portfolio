import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';

const COMPONENTS = [
  PageComponent
];

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class LayoutModule {
}
