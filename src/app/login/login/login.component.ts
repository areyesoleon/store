import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormComponent implements OnInit {

  private _api: Api<any>;


  constructor(protected builder: FormBuilder, private _core: CoreService, private route: ActivatedRoute, private _router: Router) {
    super();
    this._api = this._core.newResource('login');
    this.toInitForm();


  }

  ngOnInit(): void {
  }

  private toInitForm() {
    this._form = this.builder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  async toSave() {
    await this._api.insert(this._form.value).toPromise()

  }

}
