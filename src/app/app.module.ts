import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { FinalizadasComponent } from './finalizadas/finalizadas.component';
import { TareaComponent } from './tarea/tarea.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PendientesComponent,
    FinalizadasComponent,
    TareaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
