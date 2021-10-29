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

    this.datos = await this._api.find(null,'1').toPromise();
    // console.log(data);
  }

}
