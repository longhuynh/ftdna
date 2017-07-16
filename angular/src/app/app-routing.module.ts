import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TableDemoComponent } from '@app/demo/table/table-demo.component';

const routes: Routes = [
    { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    { path: 'app/demo', component: TableDemoComponent},
    { path: 'app/home', component: HomeComponent },
    { path: 'app/about', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }