import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/req-resp.interface';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface State {
  users: User[],
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private http = inject(HttpClient);

  //El numeral me hace la clase privada en la transpilacion a ES6 cosa que no pasa si declaro una clase privada solamente.
  #state = signal<State>({
    loading: true,
    users: [],
  });

  //!señal computada de SOLO LECTURA para acceder afuera del servicio
  public users = computed(()=> this.#state().users );
  public loading = computed(()=> this.#state().loading );

  constructor() {

    // console.log('Cargando data')

    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe(delay(1500))
    .subscribe(res => {
      this.#state.set({
        loading: false,
        users: res.data,
      })
      console.log(res)
      console.log(this.#state())
    })

  }

  getUserById(id:string){
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
    .pipe(
      delay(1500),
      map(resp => resp.data)
      )

  }
}
