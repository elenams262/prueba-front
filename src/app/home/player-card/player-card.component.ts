import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
})
export class PlayerCardComponent {
  @Input({ required: true }) player!: Player;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  onMouseEnter() {
    const video = this.videoPlayer.nativeElement;
    if (video.src && video.src !== window.location.href) {
      video.muted = true;
      video.play().catch((err) => {
        console.warn('Could not play video:', err);
      });
    }
  }

  onMouseLeave() {
    const video = this.videoPlayer.nativeElement;
    video.pause();
    video.currentTime = 0;
  }
}
