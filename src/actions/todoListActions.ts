import * as actionTypes from './types/todoListTypes';
import { ISingleElementList } from '../entities/todoSingleEl';

export const setNewElementTodoList = (newElem: ISingleElementList) => ({
    type: actionTypes.SetNewElement,
    newElem
})

