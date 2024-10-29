import React, { useReducer } from 'react'



const initialState = {
    showTestFlag: false,
    changeStyleFlag: false
}


const Hide_Text = "Hide_Text"
const Show_Text = "Show_Text"
const Change_Text_Style = "Change_Text_Style"


function reducer(state,action ) {
    switch (action.type) {
        case Hide_Text:
            return {
                ...state,
                showTestFlag:false
            }
        case Show_Text:
            return {
                ...state,
                showTestFlag:true
            }
        case Change_Text_Style:
            return   {
                ...state,
                Change_Text_Style: !state.Change_Text_Style
            }
    }
}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            { state?.showTestFlag ? <h1 style={{backgroundColor:state.Change_Text_Style ? 'black': 'white', color:state.Change_Text_Style ? "white" : "black" }}>useReducer Example </h1> : null}
             
            <button onClick={() => dispatch({ type: Hide_Text })}>Hide Text</button>
            <button onClick={() => dispatch({ type: Show_Text })}> Show Text</button>
            <button onClick={() => dispatch({ type: Change_Text_Style })}>Change styles</button>
        </>
    )
}

export default Reducer