import { Injectable } from '@angular/core';
import { IStep } from './i-step';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  protected phrasesList: IStep[] = [
    {
      title: 'Dedica muchas horas',
      description:
        'Un mínimo de 30 horas en la semana. Si no entiendes bastante, tendrás que dedicarle más horas. Al principio parece imposible, pero notarás una mejora rápidamente.',
      img: '/assets/time_managment.svg',
      bgcolor: 'grey',
    },
    {
      title: 'Programa proyectos propios',
      description:
        'Más vale 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudará a acelerar tu aprendizaje.',
      img: '/assets/programming.svg',
      bgcolor: 'blue',
    },
    {
      title: 'Procura descansar',
      description:
        'Descansar bien y desconectar son vitales. De este modo reducirás el estrés y la ansiedad. Mejorarás tu concentración y consolidarás tu aprendizaje.',
      img: '/assets/meditation.svg',
      bgcolor: 'yellow',
    },
  ];
  constructor() {}
  getPhrases(): IStep[] {
    return this.phrasesList;
  }
}
