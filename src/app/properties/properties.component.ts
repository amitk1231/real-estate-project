import { Component } from '@angular/core';
import { PropertyService } from '../shared/property.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Property } from './properties.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {
  allProperty: any;
  formValue!: FormGroup;
  propertyModelObj: Property = new Property();
  showAdd!: boolean;
  showEdit!: boolean;

  constructor(private fb: FormBuilder, private api: PropertyService) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      ptitle: ['', Validators.required],
      pprice: ['', Validators.required],
      plocation: ['', Validators.required],
      pdetails: ['', Validators.required],
    });
    this.getAllProperty();
  }

  clickAddProp() {
    this.formValue.reset();
    this.showAdd = true;
    this.showEdit = false;
  }

  getAllProperty() {
    this.api.getAllProp().subscribe((res: any) => {
      this.allProperty = res;
      console.log(this.allProperty);
    });
  }
  //add property
  addProp() {
    this.propertyModelObj.ptitle = this.formValue.value.ptitle;
    this.propertyModelObj.pprice = this.formValue.value.pprice;
    this.propertyModelObj.plocation = this.formValue.value.plocation;
    this.propertyModelObj.pdetails = this.formValue.value.pdetails;
    this.api.addListing(this.propertyModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Record added successfully');
        let ref = document.getElementById('clear');
        ref?.click();
        this.formValue.reset();
        this.getAllProperty();
      },
      (err) => {
        alert('Something went wrong' + err);
      }
    );
  }

  // delete property
  deleteProp(data: any) {
    this.api.deleteProp(data.id).subscribe((res) => {
      alert(`Property deleted successfully`);
      this.getAllProperty();
    });
  }
}
