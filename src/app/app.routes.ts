//Imports Angular
import{Routes,RouterModule} from '@angular/router'
import{ NgModule } from '@angular/core'

//Imports Components 
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    { path: '', redirectTo:'/home',pathMatch:'full'},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}

