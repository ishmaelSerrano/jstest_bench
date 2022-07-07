import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { TopBarComponent } from './layouts/components/header/top-bar/top-bar.component';
import { CategoriesBarComponent } from './layouts/components/header/categories-bar/categories-bar.component';
import { HeroComponent } from './layouts/components/header/hero/hero.component';
import { CurrentLearningComponent } from './layouts/components/content/current-learning/current-learning.component';
import { BusinessBarComponent } from './layouts/components/content/business-bar/business-bar.component';
import { LearningNextComponent } from './layouts/components/content/learning-next/learning-next.component';
import { EnrolledSuggestionsComponent } from './layouts/components/content/enrolled-suggestions/enrolled-suggestions.component';
import { WishlistCoursesComponent } from './layouts/components/content/wishlist-courses/wishlist-courses.component';
import { StudentsViewingComponent } from './layouts/components/content/students-viewing/students-viewing.component';
import { TopCoursesComponent } from './layouts/components/content/top-courses/top-courses.component';
import { FeaturedCoursesComponent } from './layouts/components/content/featured-courses/featured-courses.component';
import { BrandsBarComponent } from './layouts/components/footer/brands-bar/brands-bar.component';
import { TeachBarComponent } from './layouts/components/footer/teach-bar/teach-bar.component';
import { SearchBarComponent } from './layouts/components/header/search-bar/search-bar.component';
// tslint:disable-next-line:max-line-length
import { CurrentLearningCardComponent } from './layouts/components/content/current-learning/current-learning-card/current-learning-card.component';
import { CoursesListComponent } from './layouts/components/content/courses-list/courses-list.component';
import { CourseCardComponent } from './layouts/components/content/courses-list/course-card/course-card.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './layouts/components/content/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { MyCoursesComponent } from './pages/protected/my-courses/my-courses.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import {CourseDetailsPageComponent} from './pages/courses/course-details-page/course-details-page.component';
import { ReviewsListComponent } from './shared/reviews/reviews-list/reviews-list.component';
import { ReviewItemComponent } from './shared/reviews/reviews-list/review-item/review-item.component';
import { CookieManipulationComponent } from './layouts/components/content/rules/cookie-manipulation/cookie-manipulation.component';
import { JavascriptInjectionComponent } from './layouts/components/content/rules/javascript-injection/javascript-injection.component';
import { LinkManipulationComponent } from './layouts/components/content/rules/link-manipulation/link-manipulation.component';
import { DomXssComponent } from './layouts/components/content/rules/dom-xss/dom-xss.component';
import { OpenRedirectionComponent } from './layouts/components/content/rules/open-redirection/open-redirection.component';
import { DocumentDomainManipulationComponent } from './layouts/components/content/rules/document-domain-manipulation/document-domain-manipulation.component';
import { WebsocketUrlPoisoningComponent } from './layouts/components/content/rules/websocket-url-poisoning/websocket-url-poisoning.component';
import { WebMessageManipulationComponent } from './layouts/components/content/rules/web-message-manipulation/web-message-manipulation.component';
import { RequestHeaderManipulationComponent } from './layouts/components/content/rules/request-header-manipulation/request-header-manipulation.component';
import { LocalFilepathManipulationComponent } from './layouts/components/content/rules/local-filepath-manipulation/local-filepath-manipulation.component';
import { HtmlStorageManipulationComponent } from './layouts/components/content/rules/html-storage-manipulation/html-storage-manipulation.component';
import { XpathInjectionComponent } from './layouts/components/content/rules/xpath-injection/xpath-injection.component';
import { JsonInjectionComponent } from './layouts/components/content/rules/json-injection/json-injection.component';
import {
  ManipulatingPageDataWithCookiesComponent
} from './pages/courses/playgrounds/manipulating-page-data-with-cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    TopBarComponent,
    CategoriesBarComponent,
    HeroComponent,
    CurrentLearningComponent,
    BusinessBarComponent,
    LearningNextComponent,
    EnrolledSuggestionsComponent,
    WishlistCoursesComponent,
    StudentsViewingComponent,
    TopCoursesComponent,
    FeaturedCoursesComponent,
    BrandsBarComponent,
    TeachBarComponent,
    SearchBarComponent,
    CurrentLearningCardComponent,
    CoursesListComponent,
    CourseCardComponent,
    LoginComponent,
    LoginFormComponent,
    MyCoursesComponent,
    CourseDetailsPageComponent,
    ReviewsListComponent,
    ReviewItemComponent,
    CookieManipulationComponent,
    JavascriptInjectionComponent,
    LinkManipulationComponent,
    DomXssComponent,
    OpenRedirectionComponent,
    DocumentDomainManipulationComponent,
    WebsocketUrlPoisoningComponent,
    WebMessageManipulationComponent,
    RequestHeaderManipulationComponent,
    LocalFilepathManipulationComponent,
    HtmlStorageManipulationComponent,
    XpathInjectionComponent,
    JsonInjectionComponent,
    ManipulatingPageDataWithCookiesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [CourseCardComponent]
})
export class AppModule { }
