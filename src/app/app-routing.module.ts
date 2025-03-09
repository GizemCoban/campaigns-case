import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'campaigns',
        pathMatch: 'full',
      },
      {
        path: 'campaigns',
        component: CampaignListComponent,
      },
      {
        path: 'create-campaign',
        component: CreateCampaignComponent,
      },
    ],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
