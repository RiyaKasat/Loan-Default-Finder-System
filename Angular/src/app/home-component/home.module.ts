import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponentComponent } from './home-component.component';
import { HomeIntroComponentComponent } from './home-intro-component/home-intro-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { CardComponent } from './card/card.component';

import { DiscoverComponent } from './discover/discover.component';
import { KnowYourSectionComponent } from './know-your-section/know-your-section.component';
import { HowItworksComponent } from './how-itworks/how-itworks.component';
import { ClientFeedbackComponent } from './client-feedback/client-feedback.component';


//import {ClientFeedbackComponent} from './components/client-feedback/client-feedback.component'
const routes: Routes = [
    {
        path: '',
        component: HomeComponentComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    declarations: [
        HomeComponentComponent,
        HomeIntroComponentComponent,
        HeaderComponentComponent,
        FooterComponentComponent,
        ScrollToTopComponent,
        CardComponent,
        
        DiscoverComponent,
                  KnowYourSectionComponent,
                  HowItworksComponent,
                  ClientFeedbackComponent
        // SlantSectionComponent,

        // ClientFeedbackComponent,

    ],
    imports: [

        CarouselModule,
        RouterModule.forChild(routes),

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [ RouterModule, CardComponent, DiscoverComponent,    HomeComponentComponent,

        HeaderComponentComponent,
        FooterComponentComponent,
        ScrollToTopComponent,
        CardComponent,
        
        DiscoverComponent,
                  KnowYourSectionComponent,
                  HowItworksComponent,
                  ClientFeedbackComponent]
})
export class HomeModule { }