import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent implements OnInit {
  public todos: any[] = []

  constructor(
    private service: DataService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.afAuth.idToken.subscribe(token => {
      this.service.getTomorrowTodos(token)
        .subscribe((data: any) => this.todos = data)
    })
  }
}
