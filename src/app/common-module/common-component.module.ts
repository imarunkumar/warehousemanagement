import {NgModule} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainModule } from '../main/main.module';
import { CommonRoutingModule } from './common-routing.module'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'

@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports:[CommonRoutingModule,RouterModule, FormsModule,
        ReactiveFormsModule
    ]
})
export class CommonComponentModule{

}