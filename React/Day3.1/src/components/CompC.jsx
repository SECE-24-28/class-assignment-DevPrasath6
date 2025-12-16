import React from 'react'
import { Consumer } from '../context/contextAPI'

function CompC({data}) {

    return (
        <div>
            Comp C<h2> Data from props drilling : {data}</h2>
            <Consumer>
                {(data)=>{
                    return <h3>Data from context API : {data}</h3>
                }}
            </Consumer>
        </div>
    );
}

export default CompC
