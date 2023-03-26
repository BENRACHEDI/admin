import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartagedocumentComponent } from './partagedocument/partagedocument.component';
import { DocumentComponent } from './document/document.component';
import { ClassementComponent } from './classement/classement.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
        { path: '', component: DashboardComponent},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'partage', component: PartagedocumentComponent},
        { path: 'document', component: DocumentComponent},
        { path: 'classement', component: ClassementComponent},
        { path: 'workflow', component: WorkflowComponent},
        { path: 'adminitration', component: AdministrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
