import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Temperatura: number = 0; // Inicializa la temperatura en cero
  showAlert: boolean = false; 
  constructor(public alertController: AlertController) {}

  

  checkTemperature() {
    if (this.Temperatura > 40) {
      this.showAlert = true; // Muestra la alerta si la temperatura es mayor a 40°C
    }
  }


  async dismissAlert() {
    this.showAlert = false; // Oculta la alerta al cerrarla
  }

  // Función para obtener el color de fondo gradualmente
  getColor(temperatura: number): string {
    // Calcula los valores de los componentes RGB basados en la temperatura
    const r = Math.floor((255 * temperatura) / 70);
    const g = 0;
    const b = Math.floor((255 * (70 - temperatura)) / 70); // Puedes ajustar este valor para cambiar la dominancia de rojo en el color final

    // Retorna el color en formato RGB
    return `rgb(${r}, ${g}, ${b})`;
  }

  cambioTem2(event: any) {
    console.log('Nuevo valor de temperatura:', event.detail.value);
    // Aquí puedes realizar acciones adicionales según el valor seleccionado
  }
}
