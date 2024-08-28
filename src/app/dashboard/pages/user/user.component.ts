import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-resp.interface';

import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template:`
    <app-title title={{titleLabel()}}></app-title>


    @if(user()){

      <section>
        <img [srcset]="user()?.avatar" alt="user().first_name">

        <div>
          <h3>{{user()?.first_name}} {{user()?.last_name}}</h3>
          <p>{{user()?.email}}</p>
        </div>

      </section>

    }@else {
      <p>Cargando información</p>
    }

  `

})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private UsersService = inject(UsersService);

  public titleLabel = computed(()=>{
    if(this.user()){
      return `Informacion del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;

    }

    return 'Informacion del usuario: '

  })

  // public user = signal<User | undefined>(undefined);


  public user = toSignal(
    this.route.params.pipe(
      switchMap(({id}) => this.UsersService.getUserById(id) )
    )
  )

  // constructor(){
  //   console.log(this.route.params.subscribe(params => {
  //     console.log(params)
  //   }))
  // }

}
