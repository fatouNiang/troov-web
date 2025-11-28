
import { Component } from '@angular/core';
import { Card } from '../../../../core/models/service.model';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  // template: `<h2>À propos</h2><p>Notre mission : connecter clients et prestataires.</p>`
  templateUrl: './a-propos.component.html',
  // styleUrls: ['./a-propos.component.css']
})
export class AProposComponent {

// carousel.component.ts
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Card } from '../interfaces/card.interface';

// @Component({
//   selector: 'app-iphone-carousel',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css']
// })
// export class CarouselComponent {
  currentIndex = 0;
  isModalOpen = false;
  selectedCard: Card | null = null;

  cards: Card[] = [
    {
      id: 1,
      title: "Question de poste",
      subtitle: "Sublimez vos photos et vidéos.",
      description: "Découvrez comment l'iPhone transforme votre créativité",
      details: [
        "Caméra professionnelle",
        "Édition avancée",
        "Stockage optimisé"
      ]
    },
    {
      id: 2,
      title: "Avec d'annonces",
      subtitle: "Super rapide. Super longtemps.",
      description: "Performances exceptionnelles",
      details: [
        "Processeur ultra-rapide",
        "Autonomie prolongée",
        "Chargement efficace"
      ]
    },
    {
      id: 3,
      title: "Attention",
      subtitle: "Irrésistiblement résistant.",
      description: "Design et durabilité",
      details: [
        "Matériaux premium",
        "Résistance à l'eau",
        "Verre renforcé"
      ]
    },
    {
      id: 4,
      title: "Environnement",
      subtitle: "Recycler. Réutiliser. Recommencer.",
      description: "Engagement écologique",
      details: [
        "Matériaux recyclés",
        "Énergie verte",
        "Emballage durable"
      ]
    },
    {
      id: 5,
      title: "Confidentialité",
      subtitle: "Vos données. Doigts entre vos mains.",
      description: "Sécurité avancée",
      details: [
        "Face ID sécurisé",
        "Chiffrement des données",
        "Contrôle total"
      ]
    },
    {
      id: 6,
      title: "Personnalisation",
      subtitle: "À votre image. Dans les moindres détails.",
      description: "Expérience personnalisée",
      details: [
        "Interface adaptable",
        "Apps personnalisables",
        "Accessibilité complète"
      ]
    }
  ];

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }

  prevCard() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }

  openModal(card: Card) {
    this.selectedCard = card;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCard = null;
  }
}