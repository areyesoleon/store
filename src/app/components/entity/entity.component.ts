import { Component, OnInit } from '@angular/core';
import { FormComponent } from 'src/app/core/tools/form.component';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent extends FormComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
