import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gift-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>🎁 Dato Curioso 🎁</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="closeModal()">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>{{ datoCurioso }}</p>
    </ion-content>
  `,
  imports: [CommonModule, IonicModule],
  styleUrls: ['./gift-modal.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class GiftModalComponent {
  datosCuriosos = [
    'Los tulipanes pueden seguir creciendo después de ser cortados 🌷.',
    'Las rosas son comestibles y se usan en mermeladas y postres 🌹.',
    'Los girasoles siguen la trayectoria del sol mientras crecen 🌻.',
    'Los dientes de león son una fuente de alimento para abejas 🐝.',
    'Las margaritas simbolizan la pureza y la inocencia 🌼.',
  ];

  datoCurioso: string='';

  constructor(private modalController: ModalController) {
    this.generarDatoCurioso();
  }

  // Generar un dato curioso aleatorio
  generarDatoCurioso() {
    const randomIndex = Math.floor(Math.random() * this.datosCuriosos.length);
    this.datoCurioso = this.datosCuriosos[randomIndex];
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
