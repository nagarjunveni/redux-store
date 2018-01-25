import * as fromActions from './actions';

export const initalState = {
    loaded:false,
    loading:false,
    data:[{label:'Eat pizza',complete:false}]
};

export function reducer(state=initalState,action:{type:string,payload:any}){

    switch(action.type){
        case fromActions.ADD_TODO: {
            const todo = action.payload;
            const data = [...state.data,todo];
            return {
                ...state,
                data:data
            };

        }

        case fromActions.REMOVE_TODO:{
            console.log(action.payload);
            const data = state.data.filter(todo => todo.label != action.payload.label);
            return {...state,data:data};
        }
    }
    return state;
}