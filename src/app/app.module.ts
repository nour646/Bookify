import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BannerComponent } from './home-components/banner/banner.component';
import { ServicesComponent } from './home-components/services/services.component';
import { FeaturedComponent } from './home-components/featured/featured.component';
import { DiscountComponent } from './home-components/discount/discount.component';
import { NewBooksComponent } from './home-components/new-books/new-books.component';
import { JoinComponent } from './home-components/join/join.component';
import { ReviewsComponent } from './home-components/reviews/reviews.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FeaturedBooksComponent } from './featured-books/featured-books.component';
import { DiscountedBooksComponent } from './discounted-books/discounted-books.component';
import { MainComponent } from './home-components/main/main.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { WebsiteUsersComponent } from './admin/website-users/website-users.component';
import { EditBooksComponent } from './admin/edit-books/edit-books.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { RegisterComponent } from './authentication/register/register.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './admin/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServicesComponent,
    FeaturedComponent,
    DiscountComponent,
    NewBooksComponent,
    JoinComponent,
    ReviewsComponent,
    FooterComponent,
    BookDetailsComponent,
    FeaturedBooksComponent,
    DiscountedBooksComponent,
    MainComponent,
    AdminDashboardComponent,
    WebsiteUsersComponent,
    EditBooksComponent,
    LogInComponent,
    RegisterComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
