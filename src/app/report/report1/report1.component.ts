import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss']
})
export class Report1Component implements OnInit {
  private _api: Api<any>;
  public datos: any[] = [];



  constructor(private _core: CoreService, private route: ActivatedRoute, private _router: Router) {
    this._api = this._core.newResource('reportes');

  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {

    this.datos = [
      {
          "id": 1,
          "direcion": "suc 1",
          "nombre": "frijoles",
          "total": 2000
      },
      {
          "id": 1,
          "direcion": "suc 1",
          "nombre": "avena",
          "total": 1500
      },
      {
          "id": 1,
          "direcion": "suc 1",
          "nombre": "agua",
          "total": 1000
      },
      {
          "id": 2,
          "direcion": "suc 2",
          "nombre": "frijoles",
          "total": 2002
      },
      {
          "id": 2,
          "direcion": "suc 2",
          "nombre": "avena",
          "total": 1502
      },
      {
          "id": 2,
          "direcion": "suc 2",
          "nombre": "agua",
          "total": 1002
      }
  ];
    // const data = await this._api.find(null,'1').toPromise();
    // console.log(data);
  }

}
