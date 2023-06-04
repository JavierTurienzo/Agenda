import { Component, Input } from '@angular/core';
import { Itarea } from '../shared/interfaces/itarea';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent {

  @Input() miApp: AppComponent;
  titulo: string;
  detalle: string;
  fecha: Date;

  public listadoTareas: Itarea[] = [];
  constructor() {
    this.listadoTareas = [];
    this.miApp = { title: "Agenda", pestana: true };
    this.titulo = "";
    this.detalle = "";
    this.fecha = new (Date);
  }

  finalizar(tarea: Itarea): void {
    tarea.finalizada = true;
    this.listadoTareas.splice(this.listadoTareas.indexOf(tarea, 1));

  }

  crearTarea() {

      this.listadoTareas.push({ texto: this.titulo, detalle: this.detalle, fecha: this.fecha, finalizada: false });

  }

}
