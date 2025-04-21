import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-aleatorio',
  templateUrl: './video-aleatorio.component.html',
  styleUrls: ['./video-aleatorio.component.css']
})
export class VideoAleatorioComponent implements OnInit {
  readonly VIDEO_URL = "https://www.youtube.com/embed/";
  sanitizedUrl!: SafeResourceUrl;
  videoKey = "";

  constructor(
    private sanitizer: DomSanitizer,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.loadRandomVideo();
  }
  loadRandomVideo(): void {
    const videos = this.videoService.getVideos();
    if (videos.length === 0) return;
  
    const randomIndex = Math.floor(Math.random() * videos.length);
    const videoId = videos[randomIndex];
    const fullUrl = this.VIDEO_URL + videoId;
  
    this.videoKey = videoId;
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }
}
