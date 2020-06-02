import React, { FC, useState } from 'react';
import { Text, Button } from 'react-native';
import  styled  from 'styled-components';
import { useSelector } from 'react-redux';
import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todoListReducer';
import { ISingleElementList } from '../entities/todoSingleEl';

const TodoList: FC<{switchView(formView: boolean)}> = props =>{
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    const goToForm = () => {
        props.switchView(true);
    }
    return (
        <Wrapper>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
            <SingleElementList key={index}>
                <Text>{elem.description}</Text>
            </SingleElementList>
            )}
            <Button color="gray" title="Add New" onPress={goToForm} />
        </Wrapper>
    )
};

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
    
`;
const SingleElementList = styled.View`
    padding: 20px;
    margin: 0 0 20px 0;
    background-color: white;

`;

export default TodoList;