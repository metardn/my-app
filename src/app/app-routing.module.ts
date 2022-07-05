import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { StarsComponent } from './stars/stars.component';

const routes: Routes = [
{
  path:'home', component:HomeComponent
},
{
  path:'profile', component:ProfileComponent
},
{
  path:'gallery', component:GalleryComponent
},
{
  path:'stars', component:StarsComponent
},
{
  path:'',redirectTo:'home', pathMatch:'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
