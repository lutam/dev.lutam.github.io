import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './components/pages/homepage/homepage.component';
import {WorksComponent} from './components/pages/works/works.component';
import {BioComponent} from './components/pages/bio/bio.component';

const routes: Routes = [
  { path: '',      component: HomepageComponent },
  { path: 'works',      component: WorksComponent },
  { path: 'bio',      component: BioComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, -100],
    })],
  exports: [RouterModule]
})
export class RoutesModule { }
