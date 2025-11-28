
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ContactComponent } from './contact/contact.component';
import { Immo } from './immo/immo';
import { Transfert } from './transfert/transfert';

export const MARKETING_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'immo', component: Immo },
  { path: 'transfert', component: Transfert },
];
