import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { cloudUploadOutline, analyticsOutline } from 'ionicons/icons';
import { TeachablemachineService } from '../services/teachablemachine.service';
import { PercentPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
})
export class Tab1Page {
  topPrediction: any | null = null;
  buttonVisible: boolean = true;
  
  @ViewChild('image', { static: false }) imageElement!: ElementRef<HTMLImageElement>;

  imageReady = signal(false);
  imageUrl = signal('');
  modelLoaded = signal(false);
  classLabels: string[] = [];
  predictions: any[] = [];

  constructor(private teachablemachine: TeachablemachineService) {
    addIcons({ cloudUploadOutline, analyticsOutline });
  }
  
  async predict() {
    try {
      const image = this.imageElement.nativeElement;
      this.predictions = await this.teachablemachine.predict(image);
  
      console.log('Predicciones completas:', this.predictions);
  
      if (this.predictions?.length > 0) {
        this.topPrediction = this.predictions.reduce((max, current) =>
          current.probability > max.probability ? current : max
        );
        console.log('Predicción con mayor probabilidad:', this.topPrediction);
      }
    } catch (error) {
      console.error('Error en la predicción:', error);
      alert('Error al realizar la predicción.');
    }
    this.buttonVisible = false;
  }
  
  
  async ngOnInit() {
    await this.teachablemachine.loadModel();
    this.classLabels = this.teachablemachine.getClassLabels();
    this.modelLoaded.set(true);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageUrl.set(reader.result as string);
        this.imageReady.set(true);
      };

      reader.readAsDataURL(file);
    }
  }

  reset() {
    window.location.reload();
  }
}