import { Component } from '@angular/core';

@Component({
  selector: 'app-color-aleatorio',
  imports: [],
  templateUrl: './color-aleatorio.component.html',
  styleUrl: './color-aleatorio.component.css'
})

export class ColorAleatorioComponent {

  colorRandom = this.getRandomHexColor();

  isDarkColor(color: string): boolean {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    return brightness < 128;
  }

  getRandomHexColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }

}
