import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorAleatorioComponent } from './color-aleatorio/color-aleatorio.component';
import { VideoAleatorioComponent } from './video-aleatorio/video-aleatorio.component';
import { PlaylistComponent } from './playlist/playlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ColorAleatorioComponent, VideoAleatorioComponent, PlaylistComponent]
})
export class AppComponent {
}
