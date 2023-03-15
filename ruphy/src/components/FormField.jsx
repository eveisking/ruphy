import React from 'react'

const FormField = ({labelName, name, type, value, placeholder, 
    handleChange, isSupriseMe, handleSupriseMe}) => {
  return (
    <div>
    <div className='flex items-center gap-2 mb-2'>
        <lable
         htmlFor={name}
         className="block text-sm font-medium text-grey-900">
         {labelName}
        </lable>
        {isSupriseMe && (
            <button className='font-semibold text-xs bg-[#ECECF1]
            py-1 px-2 text-black'
            type='button'
            onClick={handleSupriseMe}> Suprise Me</button>
        ) 
        }
    </div>
    <input 
    type={type}
    id={name}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
    required
    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
    focus:ring-[#4649ff] focus:border-[#4649ff] focus:ring-1 outline-none block 
    w-full shadow-sm p-3'/>
    </div>
  )
}

export default FormField