import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { routes } from '../app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideCharts(withDefaultRegisterables()), provideAnimationsAsync()]
};
