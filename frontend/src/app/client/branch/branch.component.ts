import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  
  searchform=this.fb.group({
    search:null
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
