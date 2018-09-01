import React, { Component } from 'react'

function Boling(props){
    if(props.celsius>=100){
        return <p>水开了.</p>
    }
    return <p>水没开.</p>
}

export default Boling