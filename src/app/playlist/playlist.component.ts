import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playlist',
  imports: [FormsModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {

  videosUser: string[] = ["z8f7OvwZDfc", "JOPNVlVFT-o", "KbpNyhPqckM"];
  nuevaUrl: string = '';

  addVideo(){
    this.videosUser.push(this.nuevaUrl);
    console.log(this.videosUser);
    
  }
}
