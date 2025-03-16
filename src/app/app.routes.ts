import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [

    {path:'',component: MainpageComponent},
    {path:'imprint',component: ImprintComponent},
    {path:'privacy-policy',component: PrivacyPolicyComponent},
    {path:'project/:projectName',component: ProjectDetailsComponent}
];
 