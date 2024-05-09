import { Component, inject } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { IStep } from '../i-step';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  phrasesList: IStep[] = [];
  StepsService: StepsService = inject(StepsService);

  constructor() {
    this.phrasesList = this.StepsService.getPhrases();
    console.log(this.phrasesList);
  }
}
