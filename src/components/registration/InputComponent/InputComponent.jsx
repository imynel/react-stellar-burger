import React from 'react'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

export const InputComponent = ({placeholder, type}) => {
    
    return (
        <>
          <Input
            placeholder={placeholder}
            type={type}
          ></Input>
        </>
    )
}