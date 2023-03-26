import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PartagedocumentComponent } from './partagedocument/partagedocument.component';
import { DocumentComponent } from './document/document.component';
import { ClassementComponent } from './classement/classement.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    PartagedocumentComponent,
    DocumentComponent,
    ClassementComponent,
    WorkflowComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
