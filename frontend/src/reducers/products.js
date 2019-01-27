import {
    PRODUCT_PAGE_LOADED,
    PRODUCT_PAGE_UNLOADED,
    ADD_COMMENTARIO,
    DELETE_COMMENTARIO
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_PAGE_LOADED:
            return {
                ...state,
                product: action.payload,
                comentario: action.payload
            };
        case PRODUCT_PAGE_UNLOADED:
            return {};
        case ADD_COMMENTARIO:
            return {
                ...state,
                commentErrors: action.error ? action.payload.errors : null,
                comentario: action.error ?
                    null: (state.comentario || []).concat([action.payload.comentario])
            };
        case DELETE_COMMENTARIO:
            const comentarioId = action.comentarioId
            return {
                ...state,
                comentario: state.comentario.filter(comentario => comentario.id !== comentarioId)
            };
        default:
            return state;
    }
};
