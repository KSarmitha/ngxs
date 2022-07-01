import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngxs';

  // @Select(TodoState) todoList$ : Observable<ITodo>;

  constructor(private store: Store, private router: ActivatedRoute) {
    this.router.queryParams.subscribe((param) => {
      console.log(param.contextId);
    });
  }

  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  // onSubmit(form:any):void{
  //   this.store.dispatch()
  // }

  markDOne(): void {}
}
