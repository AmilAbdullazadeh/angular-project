import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(param => {
      alert(param.id);
    });
  }

}
