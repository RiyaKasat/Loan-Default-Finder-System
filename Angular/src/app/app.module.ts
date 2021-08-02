import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeIntroComponentComponent } from './home-component/home-intro-component/home-intro-component.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { HeaderComponentComponent } from './home-component/header-component/header-component.component';
import { FooterComponentComponent } from './home-component/footer-component/footer-component.component';
import { ScrollToTopComponent } from './home-component/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HomeIntroComponentComponent,
    BreadcrumbComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
