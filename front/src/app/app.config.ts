import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { routes } from './app.routes';
import { FilterService, MessageService } from 'primeng/api';

import { environment } from './../environments/environment';

const config: SocketIoConfig = { url: environment.socketUrl, options: {} };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(NgxWebstorageModule.forRoot({})),
    importProvidersFrom(SocketIoModule.forRoot(config)),
    MessageService,
    FilterService
  ]
};
