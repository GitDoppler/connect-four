import * as ACTION_TYPES from "../actions/action_type";
import { createMatrix} from '../../utils/matrix'

export const initialState={
    scoreP1: 0,
    scoreP2: 0,
    turn: 'P1',
    finished: false,
    matrix: createMatrix(6,7),
    pause: false,
    time:15,
    winner:'',
};

export const BoardReducer = (state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.RESTART:
            return initialState;
        case ACTION_TYPES.PAUSE:
            return{
                ...state,
                pause: !state.pause,
            };
        case ACTION_TYPES.CHANGE_TURN:
            return{
                ...state,
                turn: (state.turn === 'P1' ? 'P2' : 'P1'),
                time:15,
            };
        case ACTION_TYPES.UPDATE_MATRIX:
            return{
                ...state,
                matrix: action.matrix,
            };
        case ACTION_TYPES.FINISH:
            return{
                ...state,
                finished:true,
                winner:action.winner,
            };;
        case ACTION_TYPES.COUNT_DOWN:
            return{
                ...state,
                time: state.time - 1,
            };
        case ACTION_TYPES.P1:
            return{
                ...state,
                scoreP1: state.scoreP1 + 2,
            };
        case ACTION_TYPES.P2:
            return{
                ...state,
                scoreP2: state.scoreP2 + 2,
            };
        case ACTION_TYPES.REPLAY:
            return{
                ...state,
                turn: (state.turn === 'P1'?'P2':'P1'),
                finished: false,
                matrix: createMatrix(6,7),
                pause: false,
                time:15,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}