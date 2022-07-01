
export class AddTodo{
    static readonly type = '[Todo] Add'
    constructor(payload:any){}
}

export class EditTodo{
    static readonly type= "[Todo] Edit"
    constructor(payload:any){}
}

export class DeleteTodo{
    static readonly type = "[Todo] Delete"
    constructor(id:number){}
}

export class FetchAllTodos{
    static readonly type = "[Todo] Fetch All"
}