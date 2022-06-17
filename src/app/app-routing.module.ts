import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes =[
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: MovieDetailComponent},

]


@NgModule({
  exports: [RouterModule],

  imports: [
    [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
