import * as ACTION_TYPES from "./action_type";
export const restart=()=>{
    return{
        type:ACTION_TYPES.RESTART,
    };
};

export const pause=()=>{
    return{
        type:ACTION_TYPES.PAUSE,
    };
};

export const changeTurn=()=>{
    return{
        type:ACTION_TYPES.CHANGE_TURN,
    };
};

export const placePuck = (data)=>{
    return{
        type: ACTION_TYPES.PLACE_PUCK,
        matrix: data
    };
};

export const finish = (data)=>{
    return{
        type:ACTION_TYPES.FINISH,
        matrix: data
    };
};

export const endTurn=()=>{
    return{
        type:ACTION_TYPES.END_TURN,
    };
};

export const countDown=()=>{
    return{
        type:ACTION_TYPES.COUNT_DOWN,
    };
};

export const p1=()=>{
    return{
        type:ACTION_TYPES.P1,
    };
};

export const p2=()=>{
    return{
        type:ACTION_TYPES.P2,
    };
};

export const replay=()=>{
    return{
        type:ACTION_TYPES.REPLAY,
    };
};