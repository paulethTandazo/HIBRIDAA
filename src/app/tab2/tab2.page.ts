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
  IonButton,
  IonChip,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonChip,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    ExploreContainerComponent,
  ],
})
export class Tab2Page {
  flowers = [
    {
      name: 'Tulipanes (Tulipa) 🌷',
      scientificName: 'Tulipa spp.',
      origen: 'Asia Central y Turquía, aunque muy populares en los Países Bajos.',
      description:' Flores elegantes en forma de copa o campana, símbolo de la primavera 🌼. Son ideales para jardines y decoración.',
      colores: 'Rojo, amarillo, rosa, blanco, morado, naranja y combinaciones multicolor 🌈.',
    },
    {
      name: 'Lirios (Lilium) 🌷',
      scientificName: 'Lilium spp.',
      origen: 'Asia, Europa y América del Norte.',
      description: ' Flores perennes con pétalos grandes y vistosos 🌟. Suelen tener diseños únicos como motas o rayas, y desprenden un aroma dulce y cautivador 🌺.',
      colores: ' Blanco, amarillo, naranja, rosa, rojo, morado y combinaciones bicolores 🌈.',
    },
    
    {
      name: ' Rosas (Rosa) 🌹',
      scientificName: 'Rosa spp.',
      origen: 'Asia, aunque se encuentran en Europa, América del Norte y África del Norte.',
      description: 'Arbustos espinosos con flores aromáticas y elegantes, símbolo del amor y la belleza 💖. Varían desde flores simples hasta variedades con muchos pétalos.',
      colores: 'Rojo, blanco, rosa, amarillo, naranja, morado, azul (híbridas) y negro (muy oscuro) 🌺✨.'
    },
    {
      name: 'Girasoles (Helianthus annuus) 🌻',
      scientificName: 'Helianthus annuus.',
      origen: 'América del Norte y Central.',
      description: ' Plantas altas y alegres 🌞. Sus flores grandes y radiantes parecen pequeños soles, y tienen la peculiaridad de seguir al sol cuando son jóvenes 🌅.',
      colores: 'Amarillo con centro marrón o negro; algunas variedades tienen tonos rojizos o anaranjados 🍂.'
    },
    {
      name: 'Dientes de León (Taraxacum) 🌼',
      scientificName: 'Taraxacum officinale',
      origen: 'Europa y Asia, pero ahora están en todo el mundo.',
      description: 'Estas flores amarillas brillantes alegran los campos y jardines 🌞. Cuando maduran, se transforman en esferas blancas que al soplar liberan sus semillas al viento 🌬️✨.',
      colores: 'Amarillo; las semillas maduras son blancas debido a los vilanos.'
    },
    {
      name: ' Margaritas (Bellis perennis) 🌸',
      scientificName: 'Bellis perennis',
      origen: 'Europa, pero ahora se encuentran en todo el mundo.',
      description: ' Estas flores encantadoras son símbolo de inocencia y pureza 💕. Sus pétalos blancos rodean un alegre centro amarillo.',
      colores: 'Blanco con centro amarillo; algunas variedades tienen tonos rosa o púrpura 🌷.'
    },

  ];

  Warnings = [
    {
      name: 'Lirios (Lilium) 🌷',
      advertencia: 'Algunos lirios son tóxicos, especialmente para gatos. Pueden causar insuficiencia renal severa.',
      efectos: {
        humanos: 'Irritación leve si se ingiere o manipula en exceso.',
        mascotas: 'Vómitos, letargo, pérdida de apetito y daño renal en gatos.'
      },
      nivel: {
        humanos1: 'Bajo ⚠️',
        mascotas2: 'Alto para gatos 🐱❌',
      },
    },
    {
      name: ' Rosas (Rosa) 🌹',
      advertencia: 'Las espinas pueden causar lesiones en la piel o infecciones si no se tratan adecuadamente. Algunas variedades ornamentales pueden haber sido tratadas con pesticidas.',
      efectos: {
        humanos: 'Heridas leves por espinas; en raros casos, reacciones alérgicas.',
        mascotas: 'Generalmente seguras, pero ingerirlas en grandes cantidades podría causar malestar estomacal.'
      },
      nivel: {
        humanos1: 'Muy bajo ⚠️',
        mascotas2: ' Bajo 🐾',
      },
    },
    {
      name: 'Girasoles (Helianthus annuus) 🌻',
      advertencia: 'Son considerados seguros en general, pero el polen podría causar alergias.',
      efectos: {
        humanos: 'Alergias respiratorias o cutáneas en personas sensibles al polen.',
        mascotas: 'No son tóxicos, pero pueden causar molestias digestivas si se ingieren en exceso.'
      },
      nivel: {
        humanos1: 'Muy bajo ⚠️',
        mascotas2: 'Muy bajo 🐾',
      },
    },
    {
      name: 'Tulipanes (Tulipa) 🌷',
      advertencia: 'Los bulbos de tulipanes son tóxicos y pueden ser peligrosos si se ingieren.',
      efectos: {
        humanos: ' Náuseas, vómitos, irritación en la piel por contacto prolongado.',
        mascotas: 'Salivación, vómitos, diarrea e irritación gastrointestinal.'
      },
      nivel: {
        humanos1: 'Bajo a moderado ⚠️',
        mascotas2: 'Moderado 🐾❌',
      },
    },
    {
      name: 'Dientes de León (Taraxacum) 🌼',
      advertencia: 'Generalmente seguros, aunque podrían haber crecido en áreas tratadas con pesticidas o contaminantes.',
      efectos: {
        humanos: 'Consumo excesivo podría causar molestias digestivas.',
        mascotas: 'Generalmente seguros, pero en grandes cantidades pueden causar diarrea.',
      },
      nivel: {
        humanos1: 'Muy bajo ⚠️',
        mascotas2: 'Muy bajo 🐾',
      },
    },
    {
      name: ' Margaritas (Bellis perennis) 🌸',
      advertencia: 'Pueden ser levemente tóxicas si se consumen en grandes cantidades, especialmente para mascotas.',
      efectos: {
        humanos: 'Malestar digestivo leve o irritación cutánea en personas sensibles.',
        mascotas: 'Vómitos, diarrea o pérdida de apetito.',
      },
      nivel: {
        humanos1: 'Bajo ⚠️',
        mascotas2: 'Bajo a moderado 🐾❌',
      },
    },
  ];

  suggestions = [
    {
      scientificName: 'Caléndulas (Calendula officinalis) 🌼',
      seguridad: 'No tóxicas para humanos y mascotas.',
      beneficios: 'Usadas en remedios naturales por sus propiedades antiinflamatorias y cicatrizantes.',
      descripcion: 'Flores brillantes en tonos amarillos y naranjas que añaden un toque alegre al hogar o jardín.',
    },
    {
      scientificName: 'Violetas Africanas (Saintpaulia) 🌸',
      seguridad: ' Seguras para mascotas y personas.',
      beneficios: 'Perfectas para interiores; purifican el aire y son fáciles de cuidar.',
      descripcion: 'Pequeñas flores en tonos púrpuras, rosados o blancos que crecen en hojas aterciopeladas.',
    },
    {
      scientificName: 'Bambú de la Suerte (Dracaena sanderiana) 🍃',
      seguridad: 'No es tóxico en pequeñas cantidades.',
      beneficios: 'Aporta energía positiva según el Feng Shui.',
      descripcion: 'Aunque técnicamente no es una flor, puede combinarse con flores seguras para crear arreglos decorativos.',
    },
  ];

  selectedFlower: any;
  selectedWarning: any;
  selectedSugestion: any;

constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro de consulta 'especie'
    this.route.queryParams.subscribe((params) => {
      const especie = params['especie'];
      if (especie) {
        // Buscar la flor correspondiente
        this.selectedFlower = this.flowers.find(
          (flower) => flower.name.toLowerCase().includes(especie.toLowerCase())
        );

        // Configurar advertencias y sugerencias
        if (this.selectedFlower) {
          this.selectedWarning = this.Warnings.find(
            (warning) => warning.name === this.selectedFlower.name
          );

          this.selectedSugestion = this.suggestions.find(
            (suggestion) =>
              suggestion.scientificName.toLowerCase() ===
              this.selectedFlower.scientificName.toLowerCase()
          );
        }
      }
    });
  }
  
  
}
