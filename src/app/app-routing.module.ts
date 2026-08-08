import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { BookPageComponent } from './book-page/book-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
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
    path: 'shop',
    component: ShoppingPageComponent,
    title:"Shop"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
