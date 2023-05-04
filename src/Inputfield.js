import React, { useState } from "react";
import './InputList.css';

const Inputfield = (props) => {
    const [focused,setFocused] = useState(false);
    const handleFocus = () =>{
        if (onsubmit === true) {
            setFocused(false)
        }else{
        setFocused(true)}
    }


    return (
        <>
            <div className="row ">
            <div className="col">
                <input type={props.type} value={props.value} onChange={props.onChange} name={props.name} placeholder={props.placeholder} className="form-control my-2" id={props.id} required={props.required} 
                pattern={props.pattern} onBlur={handleFocus} focused = {focused.toString()} onFocus={() =>props.name === "cPassword" && setFocused(true)}  />
                <p className="text-danger">{props.errorMsg}</p>
            </div>
            </div>
        </>
    )
}

export default Inputfield;
