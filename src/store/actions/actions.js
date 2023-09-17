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

export const updateMatrix = (data)=>{
    return{
        type: ACTION_TYPES.UPDATE_MATRIX,
        matrix: data,
    };
};

export const finish = (data)=>{
    return{
        type:ACTION_TYPES.FINISH,
        winner:data,
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