import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  // styleUrls: ['./contact.component.css'],
})

export class ContactComponent {
  formData = signal<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  isSubmitted = signal(false);

  handleSubmit(): void {
    // Validation basique
    const data = this.formData();
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Simuler l'envoi du formulaire
    console.log('Formulaire soumis:', this.formData());
    
    this.isSubmitted.set(true);

    // Réinitialiser après 3 secondes
    setTimeout(() => {
      this.isSubmitted.set(false);
      this.formData.set({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  }
}

