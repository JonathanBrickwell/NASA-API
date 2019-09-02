import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { AboutComponent } from './_components/_pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
