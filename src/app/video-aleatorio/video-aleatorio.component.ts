import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-aleatorio',
  templateUrl: './video-aleatorio.component.html',
  styleUrls: ['./video-aleatorio.component.css']
})
export class VideoAleatorioComponent implements OnInit {
  readonly VIDEO_URL = "https://www.youtube.com/embed/";
  readonly videos = ["z8f7OvwZDfc", "JOPNVlVFT-o", "KbpNyhPqckM"];
  sanitizedUrl!: SafeResourceUrl;
  videoKey = "";


  constructor(private sanitizer: DomSanitizer) {}


  ngOnInit() {
    const randomIndex = Math.floor(Math.random() * this.videos.length);
    const videoId = this.videos[randomIndex];
    const fullUrl = this.VIDEO_URL + videoId;

    this.videoKey = videoId; 
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }
}
// z8f7OvwZDfc&t
// JOPNVlVFT-o
// KbpNyhPqckM
// https://www.youtube.com/watch?v=1an4b1vjdMQ
