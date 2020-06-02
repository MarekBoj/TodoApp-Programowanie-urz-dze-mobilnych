import * as actionTypes from '../actions/types/todoListTypes';
import { ISingleElementList } from '../entities/todoSingleEl';

export interface ITodoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: [{
        description: 'A Class priority: Feed the cat'
    },
]
});

export default (state = defaultState(), action: any): ITodoListReducer => {
    switch (action.type) {
        case actionTypes.SetNewElement: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElem]
            };
        }
        default: {
            return state;
        }
    }
};