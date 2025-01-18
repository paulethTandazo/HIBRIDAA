import { ViewChild, ElementRef, Component, signal } from '@angular/core';
import {
  IonCardContent, IonButton, IonList, IonItem, IonLabel,
  IonFab, IonFabButton, IonIcon, IonCard,
  IonHeader, IonToolbar, IonTitle, IonContent
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { cloudUploadOutline } from 'ionicons/icons';
import { TeachablemachineService } from '../services/teachablemachine.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [PercentPipe, IonCardContent, IonButton, IonList, IonItem, IonLabel,
    IonFab, IonFabButton, IonIcon, IonCard,
    IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  /* Declare la referencia al elemento con el id image */
  @ViewChild('image', { static: false }) imageElement!: ElementRef<HTMLImageElement>;
  
  imageReady = signal(false);
  imageUrl = signal("");
  modelLoaded = signal(false);
  classLabels: string[] = [];

  constructor(private teachablemachine: TeachablemachineService) {
    addIcons({ cloudUploadOutline });
  }

  /* Método ngOnInit para cargar el modelo y las clases */
  async ngOnInit() {
    await this.teachablemachine.loadModel();
    this.classLabels = this.teachablemachine.getClassLabels();
    this.modelLoaded.set(true);
  }

  /* El método onSubmit para enviar los datos del formulario mediante el servicio */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();

      // Convertir el archivo a una URL base64 para mostrarlo en el html
      reader.onload = () => {
        this.imageUrl.set(reader.result as string);
        this.imageReady.set(true);
      };

      reader.readAsDataURL(file); // Leer el archivo como base64
    }
  }
  /* Lista de predicciones */
  predictions: any[] = [];


  /* Método para obtener la predicción a partir de la imagen */
  async predict() {
    try {
      const image = this.imageElement.nativeElement;
      this.predictions = await this.teachablemachine.predict(image);
    } catch (error) {
      console.error(error);
      alert('Error al realizar la predicción.');
    }
  }
}
