import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterial } from './appmaterial.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    FooterComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterial,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    InfiniteScrollModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
