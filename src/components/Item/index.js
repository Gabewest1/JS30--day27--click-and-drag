import React from "react"

export default props => (
    <div { ...props } className="item">
        <h1>{ props.children}</h1>
    </div>
)