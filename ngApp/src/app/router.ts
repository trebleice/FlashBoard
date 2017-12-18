import { Routes } from '@angular/router';

// import project components
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { SignUpComponent } from './component/signup/signup.component';
import { BrowseComponent } from './component/browse/browse.component';
import { CreateComponent } from './component/create/create.component';
export const AppRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'browse',
        component: BrowseComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]