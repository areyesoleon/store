import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { Api } from 'src/app/core/resource/rest-api';

@Component({
  selector: 'app-report3',
  templateUrl: './report3.component.html',
  styleUrls: ['./report3.component.scss']
})
export class Report3Component implements OnInit {

  private _api: Api<any>;



  constructor(private _core: CoreService, private route: ActivatedRoute, private _router: Router) {
    this._api = this._core.newResource('reportes');

  }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    const data = await this._api.find(null,'3').toPromise();
    console.log(data);
  }

}
