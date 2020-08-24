import { NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio.component';

const PAGES = [
  PortfolioComponent
];

@NgModule({
  declarations: PAGES,
  exports: PAGES
})
export class PagesModule {
}
