import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard.component';
import { LandingPage } from './landing-page/landing-page.component';
import { Login } from './login/login.component';
import { Profile } from './profile/profile.component';
import { Ticket } from './ticket/ticket.component';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'profile', component: Profile },
  { path: 'tickets', component: Ticket },
  { path: 'landing', component: LandingPage },
  { path: '', component: LandingPage },
];
