import { Injectable } from "@angular/core";
import { NgxsOnInit, State, StateContext } from "@ngxs/store";
import { TodoActions } from './todo-actions'
export interface ITodo{
    id:string;
    title:string;
    is_done:boolean
}

export interface ITodoStateModel {
    todoList : ITodo[]
}

@State<ITodoStateModel>({
    name : 'todoList',
    defaults : {
        todoList: []
    },
})

@Injectable()

export class TodoState implements NgxsOnInit {
    ngxsOnInit(ctx?: StateContext<any>) {
        ctx?.dispatch(new TodoActions)
    }
}