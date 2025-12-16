import React from 'react'
import CompC from './CompC'

function CompB({data}) {
    return (
        <div>
            Comp B
            <CompC data={data} />
        </div>
    )
}

export default CompB
