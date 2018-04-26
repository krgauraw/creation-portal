import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  UserSearchComponent, UserEditComponent, UserProfileComponent,
  UserDeleteComponent, OrgSearchComponent, CourseSearchComponent, LibrarySearchComponent
} from './components';
const routes: Routes = [
  {
    path: 'search/Courses/:pageNumber', component: CourseSearchComponent,
    data: [{ label: 'Home', url: '/home' }, { label: 'Search', url: '' }]

  },
  {
    path: 'search/Library/:pageNumber', component: LibrarySearchComponent,
    data: [{ label: 'Home', url: '/home' }, { label: 'Search', url: '' }]

  },
  {
    path: 'search/Users/:pageNumber', component: UserSearchComponent,
    data: [{ label: 'Home', url: '/home' }, { label: 'Profile', url: '/profile' }, { label: 'Search', url: '' }],
    children: [
      { path: 'edit/:userId', component: UserEditComponent },
      { path: 'delete/:userId', component: UserDeleteComponent }
    ]
  },
  {
    path: 'search/Users/:pageNumber/view/:userId', component: UserProfileComponent,
    data: [{ label: 'Home', url: '/home' }, { label: 'Profile', url: '/profile' }]
  },
  {
    path: 'search/Organisations/:pageNumber', component: OrgSearchComponent,
    data: [{ label: 'Home', url: '/home' }, { label: 'Profile', url: '/profile' }, { label: 'Search', url: '' }]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
