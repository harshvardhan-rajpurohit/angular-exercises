import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators, FormArray } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-md-form',
  templateUrl: './md-form.component.html',
  styleUrls: ['./md-form.component.css']
})
export class MdFormComponent implements OnInit {

  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  fetchedData={}
  show=true;
  constructor(private _formbuilder:FormBuilder, private _dataService:DataServiceService) { }

  registrationForm = this._formbuilder.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    email:['',Validators.required],
    number:['',[Validators.required,
      //  Validators.pattern('^\d{10}$')
      ]],
    hobby:this._formbuilder.array([]),
    topic: ['',Validators.required],
    timePreference: ['',Validators.required]
  })

  get name(){
    return this.registrationForm.get('name')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get number(){
    return this.registrationForm.get('number')
  }
  get hobby(){
    return this.registrationForm.get('hobby') as FormArray
  }
  get topic(){
    return this.registrationForm.get('topic')
  }
  get time(){
    return this.registrationForm.get('timePreference')
  }
  
  addHobby(){
    this.hobby.push(this._formbuilder.control(''))
  }

  deleteHobby(i){
    this.hobby.removeAt(i)
  }

  onsubmit(){
    console.log(this.registrationForm.value);
    this._dataService.setData(this.registrationForm.value);
  }
  // registrationForm = new FormGroup({
  //   name:new FormControl('Harshvardhan'),
  //   email:new FormControl(''),
  //   number:new FormControl(''),
  //   hobby:new FormControl([]),
  //   topic: new FormControl(''),
  //   timePreference: new FormControl('')
  // })

  ngOnInit(): void {
     this.fetchedData = this._dataService.getData();
    if(this.fetchedData!=null){
      // this.registrationForm = fetchedData;
      this.show=false;
    }
  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onedit(){
    var data = this._dataService.getData();
    console.log(data);
    data.hobby.forEach(element => {
      this.addHobby()
    });

    this.registrationForm.setValue({
      name:data.name,
      email:data.email,
      number:data.number,
      hobby:data.hobby,
      topic:data.topic,
      timePreference:data.timePreference
    })
    
  }
}
