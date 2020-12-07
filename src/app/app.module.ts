import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';
import { Error404Compoennt } from './core/component/error-404/error-404.component';
import { CourseHomeComponent } from './courses/course-home.component.';

@NgModule({
  declarations: [
    CourseHomeComponent,
    AppComponent,
    Error404Compoennt
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', component: CourseHomeComponent, pathMatch: 'full'
      },
      {
        path: 'home', component: CourseHomeComponent
      },  
      {
        path: '**', component: Error404Compoennt
      },
    ]),
    CourseModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
