import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [CommonModule, FormsModule, ReactiveFormsModule]

@NgModule({
  declarations: [],
  imports: [

  ],
  exports: [...modules]
})
export class ShareModule { }
