import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = "";
  agregarPersona() {
    if (this.mensaje == 'Persona agregada') {
      this.mensaje = 'No se ha agregado ninguna persona';
    } else {
      this.mensaje = 'Persona agregada';
    }
  }
  /* modificarTitulo(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value;
  } */
}
