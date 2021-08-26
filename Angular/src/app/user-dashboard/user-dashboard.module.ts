import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { SettingsService } from './services/settings.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelsComponent } from './dashboard/component/panels/panels.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { RootComponent } from './dashboard/root/root.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LockComponent } from './page/lock/lock.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';

import { MatRadioModule} from '@angular/material/radio';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatInputModule } from '@angular/material/input';

import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponentComponent } from '../home-component/footer-component/footer-component.component';

import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
 
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    UserDashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatFormFieldModule,
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],

  exports:[
    
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    UserDashboardComponent

  ],

  providers: [SettingsService],
  bootstrap: [UserDashboardComponent]
})
export class UserDashboardModule { }
