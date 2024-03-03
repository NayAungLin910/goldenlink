import { RouterModule, Routes } from "@angular/router";
import { MainContentComponent } from "./app/main-content/main-content.component";
import { AboutComponent } from "./app/about/about.component";
import { ContactComponent } from "./app/contact/contact.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}