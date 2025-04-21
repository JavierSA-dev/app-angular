import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {
  nuevaUrl: string = '';

  constructor(public videoService: VideoService) {}

  addVideo() {
    this.videoService.addVideo(this.nuevaUrl);
    this.nuevaUrl = '';
  }
  
}
