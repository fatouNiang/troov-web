import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfert',
  standalone: true,
   imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transfert.html',
  styleUrl: './transfert.scss'
})
export class Transfert implements OnInit{


// export class MoneyTransferComponent implements OnInit {
  form!: FormGroup;
  step = 1;
  readonly fee = 500; // frais fixes
  transactionId = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      recipient: ['', [Validators.required, this.trimmedRequired]],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      currency: ['XOF', Validators.required],
      reason: [''],
      paymentMethod: ['card', Validators.required]
    });
  }

  // Custom validator to ensure non-empty after trim
  trimmedRequired(control: any) {
    const v = control.value;
    if (v == null) return null;
    return typeof v === 'string' && v.trim() === '' ? { required: true } : null;
  }

  // Helpers pour template
  get f() {
    return this.form.controls;
  }

  // Passe à l'étape suivante (validation step 1)
  handleContinue() {
    if (this.step === 1) {
      // marque les contrôles touchés pour afficher les erreurs
      this.form.controls['recipient'].markAsTouched();
      this.form.controls['amount'].markAsTouched();

      if (this.form.valid) {
        this.step = 2;
      }
      return;
    }

    if (this.step === 2) {
      this.step = 3;
      return;
    }
  }

  goBack() {
    if (this.step > 1) this.step--;
  }

  // Soumission finale — "effectue" le transfert et affiche l'étape succès
  handleSubmit() {
    // Ici tu appellerais ton API. On simule succès instantané.
    this.transactionId = this.generateTxId();
    this.step = 4;
  }

  resetForm() {
    this.step = 1;
    this.form.reset({
      recipient: '',
      amount: '',
      currency: 'XOF',
      reason: '',
      paymentMethod: 'card'
    });
    this.transactionId = '';
  }

  // formatage pour affichage — évite erreurs si amount vide
  formatAmount(value: any) {
    const n = Number(value);
    if (!isFinite(n) || Number.isNaN(n)) return '0';
    return new Intl.NumberFormat().format(n);
  }

  // ID de transaction aléatoire (similaire au React)
  private generateTxId() {
    return 'TRX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }


}
