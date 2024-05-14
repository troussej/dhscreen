import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { routes } from './app.routes';
import { MessageService } from 'primeng/api';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(NgxWebstorageModule.forRoot({})),
    importProvidersFrom(SocketIoModule.forRoot(config)),
    MessageService
  ]
};
