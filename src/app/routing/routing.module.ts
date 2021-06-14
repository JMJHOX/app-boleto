import {RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { QueryUserComponent } from '../query-user/query-user.component';
import { IndexComponent } from '../query/index/index.component';
import { QueryComponent } from '../query/query/query.component';
const appRoutes=[
  {path: '',component:IndexComponent,pathMatch:'full'},
  {path: 'query',component:QueryComponent,pathMatch:'full'},
  {path: 'login',component:LoginComponent,pathMatch:'full'},
  {path: 'logout',component:LogoutComponent,pathMatch:'full'},
  {path: 'queryuser',component: QueryUserComponent,pathMatch:'full'}
];
export const routing =RouterModule.forRoot(appRoutes)
