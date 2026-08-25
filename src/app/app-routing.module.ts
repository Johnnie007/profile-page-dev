import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BookDetailsPageComponent } from './book-details-page/book-details-page.component';
import { bookDetailsResolver } from './book-details-page/book-details.resolver';
import { BookRouteGuard } from './guards/book-route.guard';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
    title:"Johnnie Hicks"
  },
  {
    path: 'projects',
    component: ProjectPageComponent,
    title:"Projects"
  },
  {
    path: 'books',
    component: BookPageComponent,
    title:"Books"
  },
  {
    path: ':bookseries/:id',
    component: BookDetailsPageComponent,
    title:"Books Details",
    resolve: { book: bookDetailsResolver },
    canActivate: [BookRouteGuard]
  },
  {
    path: 'shop',
    component: ShoppingPageComponent,
    title:"Shop"
  },
  { 
    path: '**',
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
