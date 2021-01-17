import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from "styled-components";
import {addItem, removeItem, toggleStatus} from './todoSlice';

const CursorPointerSpan = styled.span `
  cursor: pointer;
`

const Marked = styled(CursorPointerSpan)`
  text-decoration: line-through;
`

const Unmarked = styled(CursorPointerSpan)`
  text-decoration: none;
`

const Body = styled.div `
  margin: 20%;
`

const getTodoComponents = function (todos, dispatch) {
    const todoComponents = todos.map(todo => {
        const StatusComponent = todo.isDone ? Marked : Unmarked;
        return <div key={todo.id}>
            <div>
                <StatusComponent
                    onClick={() => dispatch(toggleStatus({id: todo.id}))}>{todo.item}
                </StatusComponent>
                <CursorPointerSpan
                    onClick={() => dispatch(removeItem({id: todo.id}))}>&nbsp;&nbsp;&nbsp;X
                </CursorPointerSpan>
            </div>
        </div>;
    })
    return todoComponents;
}

export function Todo() {
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const [item, setItem] = useState('');

    return (
        <Body>
            <input value={item} onChange={e => setItem(e.target.value)}/>
            <button onClick={() => {
                dispatch(addItem({item}));
                setItem('');
            }}>+
            </button>
            {getTodoComponents(todos, dispatch)}
        </Body>
    );
}
