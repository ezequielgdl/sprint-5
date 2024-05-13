import { Component, Input } from '@angular/core';
import { IStep } from '../i-step';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css',
  animations: [
    trigger('slideAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('700ms ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class EscenaComponent {
  @Input() phrasesList: IStep[] = [];
  currentSlide: number = 0;

  nextSlide(): void {
    if (this.phrasesList.length > this.currentSlide) {
      this.currentSlide++;
    }
  }
  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  selectSlide(id: number): void {
    this.currentSlide = id;
  }
}
