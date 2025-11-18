import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; 

@Component({
  selector: 'app-left-side',
  standalone:true, 
  imports: [
    CommonModule
],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.scss'
})
export class LeftSideComponent {
  leftContent=[
    {
      iconName: 'home',
      panelContent:'Dashboard',
      subCategory:[]
    },
    {
      iconName: 'home',
      panelContent:'Invoice',
      subCategory:[
        {
          iconName:"home",
          panelContent:"invoice1"
        }
      ]
    },
       {
      iconName: 'home',
      panelContent:'Payments',
      subCategory:[
        {
          iconName:"home",
          panelContent:"invoice1"
        }
      ]
    },
       {
      iconName: 'settings',
      panelContent:'Settings',
      subCategory:[ ]
    }
  ]
}
