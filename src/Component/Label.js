import React from 'react'
const Label = (props) => {
    const {
        labelText,
        htmlFor
    } = props
    return (
        <>
            <div className="label-input">
                <label htmlFor={htmlFor}>{labelText}</label>
            </div>

        </>
    )
}
export default Label