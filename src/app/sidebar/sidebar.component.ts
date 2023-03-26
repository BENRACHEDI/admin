import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public routeLinks = [
    { link: '', name: 'Tableau de board', icon: 'nav-icon fas fa-th' },
    { link: 'partage', name: 'Partage un document', icon: 'nav-icon fas fa-share' },
    { link: 'document', name: 'Documents', icon: 'nav-icon fas fa-folder' },
    { link: 'classement', name: 'Classements', icon: 'nav-icon fas fa-archive' },
    { link: 'workflow', name: 'Workflow', icon: 'nav-icon fas fa-project-diagram' },
  ];

}
