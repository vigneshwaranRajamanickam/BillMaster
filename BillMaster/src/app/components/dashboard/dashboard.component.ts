import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftSideComponent } from "../left-side/left-side.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, LeftSideComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone:true
})
export class DashboardComponent {

}
