import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.scss']
})
export class Report2Component implements OnInit {

  private _api: Api<any>;
  public datos: any[] = []



  constructor(private _core: CoreService, private route: ActivatedRoute, private _router: Router) {
    this._api = this._core.newResource('reportes');

  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    // const data = await this._api.find(null,'2').toPromise();
    this.datos = [
      {
          "id": 1,
          "direcion": "suc 1",
          "nombre": "JUAN",
          "apellido": "PEREZ",
          "total": 2000
      },
      {
          "id": 1,
          "direcion": "suc 1",
          "nombre": "JUAN",
          "apellido": "PEREZ",
          "total": 1500
      },
      {
          "id": 1,
          "direcion": "suc 1",
          "nombre": "JUAN",
          "apellido": "PEREZ",
          "total": 1000
      },
      {
          "id": 2,
          "direcion": "suc 2",
          "nombre": "JUAN",
          "apellido": "PEREZ",
          "total": 2002
      },
      {
          "id": 2,
          "direcion": "suc 2",
          "nombre": "JUAN",
          "apellido": "PEREZ",
          "total": 1502
      },
      {
          "id": 2,
          "direcion": "suc 2",
          "nombre": "JUAN",
          "apellido": "PEREZ",
          "total": 1002
      }
  ];
  }


}
