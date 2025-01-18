import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonText,
    ExploreContainerComponent,
  ],
})
export class Tab2Page {
  flowers = [
    {
      name: 'Eucalipto',
      scientificName: 'Eucalyptus globulus',
      dato: 'El eucalipto es conocido por su distintivo aroma y propiedades medicinales.',
    },
    {
      name: 'Tulipán',
      scientificName: 'Tulipa gesneriana',
      origen: 'Los tulipanes tienen su origen en las regiones montañosas 🏔️ de Asia Central 🌏.',
      description:
        'El nombre tulipán proviene del término turco tülbend, que significa turbante, debido a la similitud entre la forma de la flor y los turbantes tradicionales.',
      dato: '¿Sabías que los tulipanes pueden moverse? 😎 Incluso después de ser cortados, sus tallos se inclinan hacia la luz, ¡como si bailaran para alcanzar al sol! ☀️🌷',
    },
    {
      name: 'Girasol',
      scientificName: 'Helianthus annuus',
      dato: 'Conocido por su tamaño y por seguir al sol durante el día.',
    },
    {
      name: 'Diente de león',
      scientificName: 'Taraxacum officinale',
      dato: 'Flor conocida por su simbolismo de esperanza y sueños.',
    },
    {
      name: 'Margarita',
      scientificName: 'Bellis perennis',
      dato: 'Símbolo de pureza e inocencia, muy popular en jardines.',
    },
  ];

  pets = ['Perro', 'Gato', 'Conejo'];

  selectedFlower: any = null; // Flor seleccionada
  selectedWarning: any = null; // Advertencia seleccionada
  selectedSugestion: any = null; // Sugerencia seleccionada

  Warnings = [
    {
      name: 'Tulipán',
      afectados: 'Afecta tanto a perritos como gatitos 🐶🐱',
      advertencia:
        'Los tulipanes están compuestos por alcaloides y glucósidos, elementos que son nefastos, en concreto, para el estómago de los gatos.',
      efectos: 'Vómitos y diarrea.',
      sugerencias: 'Helecho',
      nivel: 'Alto',
    },
    {
      name: 'Eucalipto',
      advertencia:
        'El eucalipto posee un aceite esencial llamado eucaliptol que es tóxico para perros y gatos.',
      efectos: 'Vómitos, diarreas, midriasis, taquipnea, debilidad generalizada.',
      sugerencias: 'Bambu',
      nivel: 'Alto',
    },
    {
      name: 'Margarita',
      advertencia:
        'Las margaritas pueden ser tóxicas para perros y gatos. Aunque son menos tóxicas que otras plantas.',
      efectos: 'Falta de coordinación, alergias dérmicas y vómitos.',
      sugerencias: 'Cactus',
      nivel: 'Intermedio',
    },
  ];

  suggestions = [
    {
      scientificName: 'Helecho',
      tipoMascota: 'Perros y Gatos 🐶🐱',
      descripcion: 'Efecto medicinal para los perritos y gatitos del hogar',
    },
    {
      scientificName: 'Bambu',
      tipoMascota: 'Perros y Gatos 🐶🐱',
      descripcion: 'Efecto medicinal para los perritos y gatitos del hogar',
    },
    {
      scientificName: 'Cactus',
      tipoMascota: 'Perros y Gatos 🐶🐱',
      descripcion: 'Efecto medicinal para los perritos y gatitos del hogar',
    },
  ];

  constructor() {}

  // Manejar selección de flor
  onFlowerSelected(event: any) {
    this.selectedFlower = event.detail.value;

    // Buscar advertencia correspondiente
    this.selectedWarning = this.Warnings.find(
      (warning) => warning.name === this.selectedFlower.name
    ) || null;

    // Llamar a la función para encontrar sugerencia
    if (this.selectedWarning) {
      this.onWarningSelected(this.selectedWarning);
    }

    console.log('Flor seleccionada:', this.selectedFlower);
    console.log('Advertencia asociada:', this.selectedWarning);
    console.log('Sugerencia asociada:', this.selectedSugestion);
  }

  // Manejar selección de advertencia para mostrar sugerencia
  onWarningSelected(warning: any) {
    // Encontrar sugerencia asociada a la advertencia
    this.selectedSugestion =
      this.suggestions.find(
        (suggestion) =>
          suggestion.scientificName.toLowerCase() ===
          (warning.sugerencias?.toLowerCase() || '')
      ) || null;

    console.log('Sugerencia asociada:', this.selectedSugestion);
  }

  // Obtener ubicación del usuario
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log('Ubicación obtenida:', { latitude, longitude });

          // Llama a una función para buscar floristerías
          this.findNearbyFlorists(latitude, longitude);
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error.message);
          alert(
            'No se pudo acceder a tu ubicación. Por favor, habilítala en tu navegador.'
          );
        }
      );
    } else {
      alert('La geolocalización no es compatible con tu navegador.');
    }
  }

  // Buscar floristerías cercanas
  findNearbyFlorists(latitude: number, longitude: number) {
    console.log('Buscando floristerías cerca de:', { latitude, longitude });
    // Aquí puedes implementar la lógica para buscar floristerías cercanas
  }
}
