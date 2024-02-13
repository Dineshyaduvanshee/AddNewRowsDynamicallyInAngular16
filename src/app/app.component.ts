import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormArray} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

getFormArrayControl(): FormArray | null {
  return this.FormGroup.get('itemRows') as FormArray;
}

  title = 'AddNewRowsDynamicallyInAngular16';
  FormGroup : any ;
  TotalRow: any;
  constructor(private _fb: FormBuilder) {  }
  // ngOnInit(): void {
  //   this.FormGroup = this._fb.group({
  //     itemRows : this._fb.array([this.initItemRow()]),
  //   });
  // }

  ngOnInit(): void {
    this.FormGroup = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()]),
    });
  }
  
  initItemRow(){
    return this._fb.group({
      Name:[''],
      Rollno:[''],
      Class:[''],
      MobileNo:[''],
    });
  }
  // deleteRow(index: number){
  //   const control = <FormArray>this.FormGroup.controls['itemRows'];
  //   if(control!=null){
  //     this.TotalRow = control.value.length;
  //   }
  //   if(this.TotalRow>1){
  //     control.removeAt(index);
  //   }else{
  //     alert('one record maindatory.');
  //     return false;
  //   }
  //   return true;
  // }

  deleteRow(index: number){
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    if(control != null){
      this.TotalRow = control.value.length;
    }
    if(this.TotalRow > 1){
      control.removeAt(index);
    } else {
      alert('At least one record is mandatory.');
      return false;
    }
    return true;
  }
  
 
  addNewRow(){
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    control.push(this.initItemRow()); 
  }
  printData() {
    console.log(this.FormGroup.value);
    
    }

    
}
