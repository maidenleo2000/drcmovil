import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  //!POR DEFECTO SIN ESCRIBIR NADA FUNCIONA EL DEFAULT
  // changeDetection: ChangeDetectionStrategy.Default,
  //!LO CAMBIAMOS A OnPush
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: `
  <app-title [title]="currentFramework()"></app-title>

  <pre>{{frameworkAsSignal() | json}}</pre>
  <pre>{{frameworkAsProperty | json}}</pre>

  `,

})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  )

  //USANDO SEÑALES
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  //SIN USAR SEÑALES COMO SIEMPRE LO VINIMOS HACIENDO
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor(){
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';

      // this.frameworkAsSignal.update( value => ({
      //   ...value,
      //   name: 'React'
      // }))
      //?OTRA FORMA
      this.frameworkAsSignal.update( value => {
        value.name = 'React';

        return {...value}

      })

      console.log('Hecho')

    }, 3000);
  }

}
