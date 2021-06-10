import {RouterModule} from '@angular/router';
import { IndexComponent } from '../query/index/index.component';
import { QueryComponent } from '../query/query/query.component';
const appRoutes=[
  {path: '',component:IndexComponent,pathMatch:'full'},
  {path: 'query',component:QueryComponent,pathMatch:'full'}
];
export const routing =RouterModule.forRoot(appRoutes)
