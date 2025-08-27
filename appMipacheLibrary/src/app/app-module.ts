import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from './core/core-module';
import { ShareModule } from './share/share-module';
import { HomeModule } from './home/home-module';
import { UsuarioModule } from './usuario/usuario-module';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { HttpErrorInterceptorService } from './share/http-error-interceptor.service';
import { ProductosModule } from './productos/productos-module';
import { PromocionModule } from './promocion/promocion-module';
import { ResenaModule } from './resena/resena-module';
import { PersonalizadosModule } from './personalizado/personalizado-module';

import { PedidoModule } from './pedido/pedido-module';

import { HttpAuthInterceptorService } from './share/http-auth-interceptor.service';
import { DashboardModule } from './dashboard/dashboard-module';




@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ShareModule,
    HomeModule,
    UsuarioModule,
    PedidoModule,
    ProductosModule,
    PersonalizadosModule,
    PromocionModule,
    ResenaModule,
    DashboardModule,
    //Siempre de ultimo
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    //provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [App],
})
export class AppModule {}
