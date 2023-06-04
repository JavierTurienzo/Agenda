import { Component, Input } from '@angular/core';
import { Itarea } from '../shared/interfaces/itarea';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-finalizadas',
  templateUrl: './finalizadas.component.html',
  styleUrls: ['./finalizadas.component.css']
})
export class FinalizadasComponent {

  @Input() miApp: AppComponent;

  public listadoTareas: Itarea[] = [];

  constructor(){
    this.miApp = {title:"Agenda", pestana:true}
  }
}
