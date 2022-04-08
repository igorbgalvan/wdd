import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  type!: string;
  load_array: any = {};
  selected = false

  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  newInsert(){
    if(this.type === 'ov_number'){
      this.load_array['ov_number'].push({ov_number: '', ov_item: ''})
      this.selected = true
    }else if(this.type === 'claim'){
      this.load_array['claim_number'].push({claim_number: ''})
      this.selected = true
    }else if(this.type === 'material'){
      this.load_array['material_number'].push({material_number: ''})
      this.selected = true
    }else{
      this.load_array['config_number'].push({config_number: ''})
      this.selected = true
    }

  }

  changeType(){
    this.selected = false;
    this.load_array = []
    this.type = ''
  }

  test(){
    console.log(this.load_array['ov_number'])
  }
  selectInputType(){
    if(this.type === 'ov_number'){
      this.load_array['ov_number'] = [{ov_number: '', ov_item: ''}]

      this.selected = true
    }else if(this.type === 'claim'){
      this.load_array['claim_number'] = [{claim_number: ''}]
      this.selected = true
    }else if(this.type === 'material'){
      this.load_array['material_number'] = [{material_number: ''}]
      this.selected = true
    }else{
      this.load_array['config_number'] = [{config_number: ''}]
      this.selected = true
    }
  }

}
