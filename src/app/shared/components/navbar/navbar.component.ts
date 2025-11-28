import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SubMenu {
  title: string;
  links: { name: string; url: string }[];
}

interface Menu {
  name: string;
  submenu?: SubMenu[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  activeMenu: string | null = null;

  // menus: Menu[] = [
  //   {
  //     name: 'Un service',
  //     submenu: [
  //       {
  //         title: 'Immobilier',
  //         links: [
  //           { name: 'Location long séjour', url: '#' },
  //           { name: 'Airbnb', url: '#' },
  //           { name: 'Colocation', url: '#' },
  //         ],
  //       },
  //       {
  //         title: 'Transfert d’argent',
  //         links: [
  //           { name: 'Envoie', url: '#' },
  //           { name: 'Réception', url: '#' },
  //         ],
  //       },
  //       {
  //         title: 'Coiffure',
  //         links: [
  //           { name: 'Femme', url: '#' },
  //           { name: 'Homme', url: '#' },
  //         ],
  //       },
  //       {
  //         title: 'Nourriture',
  //         links: [
  //           { name: 'Restaurants', url: '#' },
  //           { name: 'à distance', url: '#' },
  //         ],
  //       },
  //       {
  //         title: 'Espace Étudiant',
  //         links: [
  //           { name: 'Bourse scolaire à Dakar', url: '#' },
  //           { name: 'Pack étudiant Bourse | Voyage | Logement', url: '#' },
  //         ],
  //       },
  //     ],
  //   },
  //   { name: 'Ton réseau' },
  //   { name: 'Un produit' },
  //   { name: 'A propos' },
  //   { name: 'Contact' },
  // ];

  toggleMenu(menu: string | null) {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }
}

