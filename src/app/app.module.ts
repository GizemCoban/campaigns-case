import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './components/login/login.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCampaignComponent } from './components/edit-campaign/edit-campaign.component';
import { ToastComponent } from './components/toast/toast.component';
import { DeleteCampaignComponent } from './components/delete-campaign/delete-campaign.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    CampaignListComponent,
    CreateCampaignComponent,
    EditCampaignComponent,
    ToastComponent,
    DeleteCampaignComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
