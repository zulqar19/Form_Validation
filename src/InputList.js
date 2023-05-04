import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Inputfield from "./Inputfield";

const InputList = () => {
    const [inputValue, setInputValue] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        password: "",
        cPassword: ""
    });

const inputs = [
    {
        id:1,
        name: "fName",
        type:"text",
        errorMsg: "First Name can't be empty and shouldn't have special characters and can't be numbers and not more than 16 characters",
        placeholder:"First Name",
        pattern: "^[a-z A-Z]{1,16}",
        required: true,
    },   
    {
        id:2,
        name: "lName",
        type:"text",
        errorMsg: "Last Name can't be empty and shouldn't have special characters",
        placeholder:"Last Name",
        pattern: "^[a-z A-Z]{1,24}",
        required: true,
    },
    {
        id:3,
        name: "email",
        type:"email",
        errorMsg: "It should be a valid email address",
        placeholder:"Your Email here",            
        required: true,
    },
    {
        id:4,
        name: "phone",
        type:"tel",
        errorMsg: "Mobile number must have 10 digits",
        placeholder:"Your Number",
        required: true,
        pattern: "^[0-9]{10}",

    },
    {
        id:5,
        name: "password",
        type:"password",
        errorMsg: "Password should be 8-20 Characters and include 1 Uppercase 1 Lowercase 1 Number and 1 Special Character",
        placeholder:"Password",
        required: true,
        pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,20}$",
    },
    {
        id:6,
        name: "cPassword",
        type:"password",
        errorMsg: "Password  doesn't  match",
        placeholder:"Confirm Password",
        pattern: inputValue.password ,
        required: true,
    }
]



    const handlechange = (e) => {
        const { name, value } = e.target;
        setInputValue((val) => {
            return {
                ...val, [name]: value,
            }
        })
    }

    function clearText(){
        let allInput = document.querySelectorAll('input');
        let allError = document.querySelectorAll('p');
        allError.forEach((errors) =>{
            errors.innerHTML = "";
        })
        allInput.forEach((inputs) =>{
            inputs.value = "";
        })
    }

    const onSubmits = (e) => {
        e.preventDefault();
        clearText();
        alert("form Submitted")
        
        
    }
    return (
        <>
            <div className=" container p-4 my-5 border border-info shadow mb-5 bg-white rounded">
                <h1 className="text-center text-primary">How to validate form using JavaScript</h1><hr />
                <form className="container p-2" onSubmit={onSubmits} autoComplete="off" >
                    {inputs.map((input)=>(
                        <Inputfield key={input.id} {...input} value = {inputValue[input.name]} onChange = {handlechange} /> 
                    ))}        
                    <button type="submit" className="btn btn-success mt-2 mx-2">Submit</button>
                </form>
            </div>
        </>
    )
}

export default InputList ;
