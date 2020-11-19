import React from 'react'

function FormInput({className, placeholder, id, name, label, value, onChange}) {
    return (
        <div className={"input-field " + className}>
            <input 
                placeholder={placeholder || ''} 
                id={id} 
                name={name}
                type="text"
                value={value} 
                onChange={onChange}/>
            <label htmlFor={id} className={value && "active"}>{label}</label>
        </div>
    )
}

export default FormInput
