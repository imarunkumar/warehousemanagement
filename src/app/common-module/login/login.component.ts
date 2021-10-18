import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageServiceService } from 'src/app/service/local-storage-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;
  constructor(public router:Router,private localStr:LocalStorageServiceService,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  signIn(){
  if(this.localStr.getData(this.username) ){
    this.router.navigateByUrl('/stockboard')
    this.toaster.success("Login successfully");

  }else{
    this.toaster.error("Invalid Login",null,{
      progressBar:true,
      progressAnimation:'increasing',
      tapToDismiss:false
    });
  } 
}

}
