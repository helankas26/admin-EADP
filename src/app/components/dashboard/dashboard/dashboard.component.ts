import { Component } from '@angular/core';
import {DashboardHeaderComponent} from "../../shared/dashboard-header/dashboard-header.component";
import {DashboardNavComponent} from "../../shared/dashboard-nav/dashboard-nav.component";
import {RouterOutlet} from "@angular/router";
import {DashboardFooterComponent} from "../../shared/dashboard-footer/dashboard-footer.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardHeaderComponent,
    DashboardNavComponent,
    RouterOutlet,
    DashboardFooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
