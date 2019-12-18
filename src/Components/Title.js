import React from 'react'

function Title({name,title}) {
    return (
        <div className="row mt-5">
            <div className="col-10 mx-auto my-2 text-center">
<div className="text-capitalize display-4">{name} {title}</div>
            </div>
        </div>
    )
}

export default Title
