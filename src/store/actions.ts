///action constants
export const ADD_TODO = '[TODO] Add Todo';
export const REMOVE_TODO = '[TODO] Remove Todo';

//action creators
export class AddToDo{
    readonly type = ADD_TODO;
    constructor(private payload:any){}
}

export class RemoveToDo{
    readonly type = REMOVE_TODO;
    constructor(private payload:any){}
}