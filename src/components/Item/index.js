import React from "react"
import randomColor from "randomcolor"

export default props => (
    <div { ...props } className="item" style={{ background: randomColor() }}>
        <h1>{ props.children}</h1>
    </div>
)