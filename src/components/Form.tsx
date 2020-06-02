import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setNewElementTodoList } from '../actions/todoListActions';
import { ISingleElementList } from '../entities/todoSingleEl';

type setNewElementTodoList = ReturnType<typeof setNewElementTodoList>;

const Form: FC<{switchView(formView: boolean)}> = props =>{
    const dispatch = useDispatch();
    const [toDoInput, setToDoInput] = useState<string>('');

    const toDoValueChange = (txt) => {
        setToDoInput(txt.nativeEvent.text);
    }

    const saveData = () => {
        dispatch<setNewElementTodoList>(setNewElementTodoList({
            description: toDoInput
        } as ISingleElementList
        ));
        props.switchView(false)
    }

    return (
        <Wrapper>
            <CustomTextInput value={toDoInput} onChange={toDoValueChange} placeholder="Text"/>
            <Button color="gray" title="Sumbit" onPress={saveData}/> 
        </Wrapper>
    )
};

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
    padding: 20px;
`;

const CustomTextInput = styled.TextInput`
    margin: 20px 20px 20px 0px;
    padding: 10px;
    color: black;
    width: 100%;
    height: 100px;
    background-color: white;

`;
export default Form;