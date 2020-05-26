import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MongoDBService } from '../mongo-db.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,private _service:MongoDBService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      fname: [null, [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]{3,20}")]],
      lname: [null, [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]{3,20}")]],
      phone: [null, [Validators.required,Validators.maxLength(10),Validators.pattern("[0-9]{10}")]],
      email: [null, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    });
    this.secondFormGroup = this._formBuilder.group({
      apt: [null, [Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z0-9\s,'-]*$")]],
      city: [null, [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]{3,20}")]],
      state: [null, [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]{3,20}")]],
      pin: [null, [Validators.required,Validators.minLength(3),Validators.pattern("[0-9]{6}")]],
    });
  }

  // GETTERS start--------------------------
  get fname(){
    return this.firstFormGroup.get('fname')
  }
  get lname(){
    return this.firstFormGroup.get('lname')
  }
  get phone(){
    return this.firstFormGroup.get('phone')
  }
  get email(){
    return this.firstFormGroup.get('email')
  }

  get apt(){
    return this.secondFormGroup.get('apt')
  }
  get state(){
    return this.secondFormGroup.get('state')
  }
  get city(){
    return this.secondFormGroup.get('city')
  }
  get pin(){
    return this.secondFormGroup.get('pin')
  }
  // GETTERS end

  form1Submit(){
    // console.log(this.firstFormGroup.value)
  }

  form2Submit(){
    // console.log(this.secondFormGroup.value)
    let dataToBeStored = this._service.manipulateData(this.firstFormGroup.value,this.secondFormGroup.value);
    // console.log(dataToBeStored)
    this._service.storeData(dataToBeStored)
    .subscribe(
      data=>{console.log(data)},
      error =>{console.log("ERROR: "+error)}
    )
  }

}
