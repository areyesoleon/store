import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';
import { FormComponent } from 'src/app/core/tools/form.component';
import Swal from 'sweetalert2';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormComponent implements OnInit {

  private _api: Api<any>;


  constructor(protected builder: FormBuilder, private _core: CoreService, private route: ActivatedRoute, private _router: Router,
    private localStorage: LocalStorageService,) {
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

    try {
      let res = await this._api.insert(this._form.value).toPromise();
      this.localStorage.store('user', res);
      this._router.navigate(['/menu']);
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al guardar el cliente',
        showConfirmButton: false,
        timer: 1500
      })
    }


  }

}
