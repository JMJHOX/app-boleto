import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './routing/routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './query/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { QueryComponent } from './query/query/query.component';
import { InsertComponent } from './query/insert/insert.component';
import { NetworkInterceptor } from './shared/network/network.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    QueryComponent,
    InsertComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatToolbarModule,MatButtonModule,NgbModule, MatProgressSpinnerModule,MatTableModule,
    HttpClientModule
  ],
  exports:[
    MatToolbarModule,MatButtonModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:NetworkInterceptor,
      multi:true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
