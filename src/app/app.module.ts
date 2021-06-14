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
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { QueryComponent } from './query/query/query.component';
import { InsertComponent } from './query/insert/insert.component';
import { NetworkInterceptor } from './shared/network/network.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { QueryUserComponent } from './query-user/query-user.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    QueryComponent,
    InsertComponent,
    LoginComponent,
    LogoutComponent,
    QueryUserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatToolbarModule,MatButtonModule,NgbModule, MatProgressSpinnerModule,MatTableModule,MatMenuModule,
    HttpClientModule,
    Ng2SmartTableModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    FormsModule, ReactiveFormsModule
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
