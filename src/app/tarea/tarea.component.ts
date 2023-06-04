import { Component, Input } from '@angular/core';
import { Itarea } from 'src/app/shared/interfaces/itarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {

  @Input() estaTarea: Itarea;

  constructor() {
    this.estaTarea = { texto:"", detalle:"", finalizada: false, fecha: new Date() };
  }

}
