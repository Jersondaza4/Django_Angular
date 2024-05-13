import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DataService } from './dataservice/data.service';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),DataService, provideHttpClient()]
};
