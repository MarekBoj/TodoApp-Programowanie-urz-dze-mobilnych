import React, { FC, useState } from 'react';
import {ScrollView } from 'react-native';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

const TodoScreen: FC = () => {
    const [formView, setFormView] = useState<boolean>(false);
    return (
        <ScrollView style={{ height: 50, backgroundColor: '#1f1f1f' }}>
            {formView ? (
                <Form switchView={setFormView}/>) : (<TodoList switchView={setFormView}/>    
            )}
        </ScrollView>
    );
};

export default TodoScreen;