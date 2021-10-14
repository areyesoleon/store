import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

const modules = [CommonModule, FormsModule, ReactiveFormsModule]

@NgModule({
  declarations: [],
  imports: [

  ],
  exports: [...modules]
})
export class ShareModule { }
