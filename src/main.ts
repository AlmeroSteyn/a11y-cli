import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { A11yCliAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(A11yCliAppComponent);
