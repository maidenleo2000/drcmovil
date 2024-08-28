import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(
        {
          skipInitialTransition: true,
          onViewTransitionCreated(transitionInfo){
            console.log({transitionInfo})
          }
        }
      ),

      ),
    //Con el importProvidersFrom se importan los modulos que quiero que sean GLOBALES en toda la aplicación como el HttpClientModule
    importProvidersFrom(
      HttpClientModule,
    )
  ]
};
