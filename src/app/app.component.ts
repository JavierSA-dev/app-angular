import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorAleatorioComponent } from './color-aleatorio/color-aleatorio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ColorAleatorioComponent]
})
export class AppComponent {
}
