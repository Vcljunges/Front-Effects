import { Item } from "../types/item";

export type addAction = {
    type: 'add';
    payload: string;
}

export type editAction = {
    type: 'edit';
    payload: {id: number, newText: string};
}

export type toggleAction = {
    type: 'toggle';
    payload: {id: number};
}

export type deleteAction = {
    type: 'delete';
    payload: {id: number};
}

export type Action = addAction | editAction | toggleAction | deleteAction;

export const listReducer = (list: Item[], action: Action) => {
    switch(action.type) {
        case 'add':
            return [...list, {id: list.length, text: action.payload, done: false}];
        case 'edit':
            return list.map((t) =>
                t.id === action.payload.id ? { ...t, text: action.payload.newText } : t
            );
        case 'toggle':
            return list.map((t) =>
                t.id === action.payload.id ? { ...t, done: !t.done } : t
            );
        case 'delete':
            return list.filter((t) => t.id !== action.payload.id);
        default:
            return list;
    }
}
