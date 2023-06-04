import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent {
  @Input() miApp: AppComponent;

  constructor(){
    this.miApp = {title:"Agenda", pestana:true}
  }

  cambiarPestana(pestana:boolean){
    if(pestana){
      this.miApp.pestana = false;
    } else {
      this.miApp.pestana = true;
    }
  }
}
