import React from 'react'
import CompB from './CompB'

function CompA({data}) {
    return (
        <div>
            Comp A
            <Compb data={data} />
        </div>
    )
}

export default CompA
