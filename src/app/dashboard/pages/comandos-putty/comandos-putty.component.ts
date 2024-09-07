import { Component, input } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comandos-putty',
  standalone: true,
  imports: [ TitleComponent],
  templateUrl: './comandos-putty.component.html',
  styleUrl: './comandos-putty.component.css'
})
export default class ComandosPuttyComponent {

  valorPuerto: string = '7/3/1';

  asignarPuerto(valor: string) {

    this.valorPuerto = valor;
    console.log('Valor del puerto', valor);

  }

}
