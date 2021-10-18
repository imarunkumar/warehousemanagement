import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { LocalStorageServiceService } from 'src/app/service/local-storage-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private toaster:ToastrService,private addUser:LocalStorageServiceService,private route:Router,private ngxLoader:NgxUiLoaderService) {
    
   }

  ngOnInit(): void {
    document.body.style.backgroundImage ="url('/assets/bg-image/loginBg.jpg')";
  }

  signIn(form: NgForm){
    if(form.form.status==="VALID"){
      this.ngxLoader.start();
      console.log(this.addUser.getData('email'));
      
      if(this.addUser.getData(form.value['email'])){
        this.toaster.warning("This user already has an account");
      }else{
        this.addUser.setData(form.value['email'],JSON.stringify(form.value));
        this.toaster.success("Successfully Submitted.");
        this.route.navigateByUrl('/login');
      }
    }else{
      this.toaster.error("Invalid form");

    }
    this.ngxLoader.stop();
  }
 ngOnDestroy(): void {
   //Called once, before the instance is destroyed.
   //Add 'implements OnDestroy' to the class.
   document.body.style.backgroundImage ="";
 }
  
}
