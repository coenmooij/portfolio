import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { PageComponent } from '../layout/page/page.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '', component: PageComponent, children: [
      {path: '', component: PortfolioComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
