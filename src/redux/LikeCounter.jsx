import React, { useState } from "react";
import { createStore } from "redux";
import Reducer from "./Reducer";
import { incrementLike,decrementLike } from "./Actions";

const myStore = createStore(Reducer)

function LikeCounter(){
    const [like,setLike] = useState(0)

    const updated = myStore.subscribe(() => {
        setLike(myStore.getState().like)
    })

    return(
        <div className="container">
            <h1>{like}</h1>
            <button onClick={()=>myStore.dispatch(incrementLike())}>Like</button>
            <button onClick={()=>myStore.dispatch(decrementLike())}>Unlike</button>
        </div>
    )
}

export default LikeCounter;