import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  public todos: any[] = []

  constructor(
    private service: DataService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.afAuth.idToken.subscribe(token => {
      this.service.getTodayTodos(token)
        .subscribe((data: any) => this.todos = data)
    })
  }

}
