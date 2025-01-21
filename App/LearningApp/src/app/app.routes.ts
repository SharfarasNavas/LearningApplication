import { Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { PlayerdetailsComponent } from '../playerdetails/playerdetails.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Default route
  { path: 'main', component: MainPageComponent},   
  {path:'playerdetails',component:PlayerdetailsComponent}       // Route for MainComponent
];
