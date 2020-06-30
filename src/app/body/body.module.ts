import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [ HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    
  ]
})
export class BodyModule { }
