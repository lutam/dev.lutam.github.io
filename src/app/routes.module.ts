import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './components/pages/homepage/homepage.component';
import {WorksComponent} from './components/pages/works/works.component';

const routes: Routes = [
  { path: '',      component: HomepageComponent },
  { path: 'experience',      component: WorksComponent },
  { path: '**', redirectTo: '/experience'},
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
