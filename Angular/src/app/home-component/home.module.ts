import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponentComponent } from './home-component.component';
import { HomeIntroComponentComponent } from './home-intro-component/home-intro-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

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
        ScrollToTopComponent
        // SlantSectionComponent,

        // ClientFeedbackComponent,

    ],
    imports: [

        CarouselModule,
        RouterModule.forChild(routes),

    ],
    exports: [HomeComponentComponent, RouterModule],
})
export class HomeModule { }