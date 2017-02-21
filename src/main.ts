import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { HrzModule } from './app/hrz.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HrzModule);
