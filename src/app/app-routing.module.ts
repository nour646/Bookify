import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountedBooksComponent } from './discounted-books/discounted-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewBooksComponent } from './new-books/new-books.component';
import { MainComponent } from './home-components/main/main.component';
import { FeaturedBooksComponent } from './featured-books/featured-books.component';
import { WebsiteUsersComponent } from './admin/website-users/website-users.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EditBooksComponent } from './admin/edit-books/edit-books.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'new-books', component: NewBooksComponent }, // Add a route for your new component
  { path: 'discounted-books', component: DiscountedBooksComponent }, // Add a route for your discounted component
  { path: 'featured-books', component: FeaturedBooksComponent },
  { path: 'website_users', component: WebsiteUsersComponent},
  { path: 'admin_dashboard', component: AdminDashboardComponent },
  { path: 'books_edit', component: EditBooksComponent },
  { path: 'user_details', component: UserDetailsComponent },
  { path: 'login_form', component: LogInComponent},
  { path: 'register_form', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
