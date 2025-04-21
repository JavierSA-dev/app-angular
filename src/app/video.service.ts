import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // disponible en toda la app
})
export class VideoService {
  videosUser: string[] = ["z8f7OvwZDfc", "JOPNVlVFT-o", "KbpNyhPqckM"];

  addVideo(video: string) {
    // solo coge lo de despues de ?v=
    let videoSplited = video.split("?v=");
    this.videosUser.push(videoSplited[1]);
  }

  getVideos(): string[] {
    return this.videosUser;
  }
}
