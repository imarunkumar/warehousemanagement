import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { LocalStorageServiceService } from 'src/app/service/local-storage-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private toaster:ToastrService,private addUser:LocalStorageServiceService,private ngxLoader:NgxUiLoaderService) {
    document.body.style.backgroundImage ="url('/assets/bg-image/loginBg.jpg')";
   }

  ngOnInit(): void {
  
  }

  signIn(form: NgForm){
    this.ngxLoader.start();
    if(form.form.status==="VALID"){
      console.log(this.addUser.getData('email'));
      
      if(this.addUser.getData(form.value['email'])){
        this.toaster.warning("This user already has an account");
      }else{
        this.addUser.setData(form.value['email'],JSON.stringify(form.value));
        this.toaster.success("Successfully Submitted.");
      }
    }else{
      this.toaster.error("Invalid form");

    }
    this.ngxLoader.stop();
  }
  
}
