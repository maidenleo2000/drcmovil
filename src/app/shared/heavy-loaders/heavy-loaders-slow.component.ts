import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [ CommonModule],
  template: `
    <section [ngClass]="['w-full h-[400px]', cssClass]" >
      Heavy Loader Slow
    </section>
  `
})
export class HeavyLoadersSlowComponent {

  @Input({required:true}) cssClass!: string;


  constructor(){
    console.log('HeavyLoader Component')

    const start = Date.now();
    //CODIGO BLOQUEANTE, NO SE DEBE HACER PERO ES PARA BLOQUAR TODO 3 SEGUNDOS
    while(Date.now() - start < 3000){}
    console.log('Cargado')
  }

}
