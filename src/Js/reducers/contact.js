import {GET_CONTACTS_FAILED,GET_CONTACTS_LOAD,GET_CONTACTS_SUCCES} from "../const/contact"


const initialState={
    loading:false,
    contacts:[],
    err: null
};
export const contactReducer=(state=initialState,{type,payload})=>{

    switch (type) {
        case GET_CONTACTS_LOAD:
            return {...state,loading:true}
        case GET_CONTACTS_SUCCES:
            return {...state,contacts:payload,loading:false}
        case GET_CONTACTS_FAILED:
            return {...state,err:payload,loading:false}
    
        default:
            return state ;
    }
}
