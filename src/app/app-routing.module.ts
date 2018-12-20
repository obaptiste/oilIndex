import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OilsComponent } from './oils/oils.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { OilDetailComponent } from './oil-detail/oil-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: OilDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'oils', component: OilsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
