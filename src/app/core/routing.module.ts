import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from '../board/board.component';
import {BoardDetailComponent} from '../board/board-detail/board-detail.component';


const customer = 'customer';
const customerRoot = '/' + customer + '/';

const appRoutes: Routes = [
  {path: 'board', component: BoardComponent},
  {path: 'board/:id', component: BoardDetailComponent},
  // {path: 'reset-password', component: ResetPasswordComponent},
  // {path: '', component: LoginComponent},
  // {
  //   path: customer,
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {path: '', redirectTo: customerRoot + 'home', pathMatch: 'full'},
  //     {path: 'home', component: OverviewComponent},
  //     {path: 'live-tracking', component: LiveTrackingComponent},
  //     {path: 'billing', component: BillingComponent},
  //     {path: 'trips', component: TripManagementComponent},
  //     {path: 'user-management', component: UserManagementComponent},
  //     {path: 'settings', component: SettingsComponent},
  //     {path: '**', redirectTo: customerRoot + 'home', pathMatch: 'full'}
  //   ]
  // },
  {path: '', redirectTo: '/board', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
