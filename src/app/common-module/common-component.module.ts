import {NgModule} from '@angular/core'
import { CommonRoutingModule } from './common-routing.module'
import { LoginComponent } from './login/login.component'

@NgModule({
    declarations: [LoginComponent],
    imports:[CommonRoutingModule]
})
export class CommonComponentModule{

}