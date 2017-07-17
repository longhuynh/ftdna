import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SamplesComponent } from '@app/samples/samples.component';
import { SamplesByStatusComponent } from '@app/samples-by-status/samples-by-status.component';
import { SamplesByUserComponent } from '@app/samples-by-user/samples-by-user.component';

const routes: Routes = [
    { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    { path: 'app/home', component: HomeComponent },
    { path: 'app/samples', component: SamplesComponent },
    { path: 'app/samples-by-user', component: SamplesByUserComponent },
    { path: 'app/samples-by-status', component: SamplesByStatusComponent },
    { path: 'app/about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }