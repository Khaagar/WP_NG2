import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AdditionalContentComponent } from './additional-content/additional-content.component';

const routes: Routes = [
    {
        path: '',
        component: PostListComponent,
        pathMatch: 'full'
    },
    {
        path: 'menu1',
        component: PostListComponent
    },
    {
        path: 'menu2',
        component: AdditionalContentComponent
    }
     

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRouterModule{}