import React from 'react'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

export const InputComponent = ({placeholder, type, icon}) => {
    
    return (
        <>
          <Input
            placeholder={placeholder}
            type={type}
            icon={icon}
          ></Input>
        </>
    )
}