import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

{
  path: 'dashboard',
  // loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
  //!OTRA FORMA ES AGREGANDO EXPORT DEFAULT A LA CLASE DASHBOARDCOMPONENT y la ruta queda mas corta
  loadComponent: () => import('./dashboard/dashboard.component'),
  children: [
    {
      path: 'Gestores',
      title: 'Nokia y Huawei',
      loadComponent: () => import('./dashboard/pages/gestores/gestores.component')
    },
    {
      path: 'Degradacion',
      title: 'ROE',
      loadComponent: () => import('./dashboard/pages/roe/roe.component')
    },
    {
      path: 'Cortes de FO',
      title: 'Comandos Putty',
      loadComponent: () => import('./dashboard/pages/comandos-putty/comandos-putty.component')
    },
    // {
    //   path: 'defer-options',
    //   title: 'Defer Options',
    //   loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
    // },
    // {
    //   path: 'defer-views',
    //   title: 'Defer Views',
    //   loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
    // },
    // {
    //   path: 'user/:id',
    //   title: 'User View',
    //   loadComponent: () => import('./dashboard/pages/user/user.component')
    // },
    // {
    //   path: 'user-list',
    //   title: 'User List',
    //   loadComponent: () => import('./dashboard/pages/users/users.component')
    // },
    // {
    //   path: 'view-transition-1',
    //   title: 'View Transition 1',
    //   loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component')
    // },
    // {
    //   path: 'view-transition-2',
    //   title: 'View Transition 2',
    //   loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component')
    // },
    {
      path: '',
      redirectTo: 'gestores',
      pathMatch: 'full'
    }
  ]
}, {
  //RUTAS AL ABRIR APLICACION
  path: '',
  redirectTo: '/dashboard',
  //para redireccionar bien
  pathMatch: 'full'
}


];

@NgModule({
  //EXPLICACION: Aca se agrega el {useHash: true} para que al recargar la pagina en el HOSTING no de error. Al tener una ruta como se maneja aca se le dice al hosting que busque adentro de esa ruta el archivo index.html pero no existe en este caso. Al habilitar el useHash se agrega un # antes de la ruta para que no de error y lo maneja Angular
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
