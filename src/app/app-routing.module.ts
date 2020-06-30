import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorComponentComponent } from './error-component/error-component.component';


const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent,
    children: [
      { 
        path:'',loadChildren: () => import('./body/body.module').then(m => m.BodyModule) 
      },
      { 
        path: 'body', loadChildren: () => import('./body/body.module').then(m => m.BodyModule) 
      },
    ]
  },
  
  {path:'**',
  component:ErrorComponentComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
