import {validatedLength,validateEmail } from '../utilities/validation.util'

export const initialState = {
    email:{
    value: '',
    isValid : false,
    isTouched : false
    },
password :{
    value: '',
    isValid : false,
    isTouched : false
    }
}


export const actionTypes = {
    SET_EMAIL : 'SET_EMAIL',
    SET_PASSWORD :'SET_PASSWORD',
    SUBMIT : 'SUBMIT'

}
export const formReducer = (state = initialState, action) =>{
    const { payload} = action
    switch(action.type){
        case actionTypes.SET_EMAIL : {
            const isValid = validatedLength(payload, 8) && validateEmail(payload)
            let {isTouched} = state.email
            // Set isTouched to true once the characters count exceed 3
            if(!state.email.isTouched){
                if(state.email.value.length >= 3){
                    isTouched = true
                }
            }
            return {
                ...state,
                email : {
                    value : payload,
                    isTouched,
                    isValid,
                }
            }

        }
    }
}