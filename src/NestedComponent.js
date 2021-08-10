import React from 'react'

function NestedComponent()
{
    return (
        <div>
            <h1>This is the parent component</h1>
            <Child />{/*I have called the child component here*/}
            </div>
    )
}
const Child = () => {//this is the child function component
    return (
        <div>
            <h3>i am the kid</h3>
        </div>
    )
}
export default NestedComponent