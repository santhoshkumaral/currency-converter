import React from 'react'
import Label from './Label'
const Input = (props) => {
    const {
        onChangeAmount,
        amount
    } = props
    return (
        <>
            <div>
                <Label htmlFor={'amount'} labelText={'Enter Amount'} />
            </div>
            <div>
                <input type="text" name="amount" className="input-field" value={amount} onChange={onChangeAmount} />

            </div>
        </>
    )
}
export default Input