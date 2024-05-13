import { Component, Input } from '@angular/core';
import { IStep } from '../i-step';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css',
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
