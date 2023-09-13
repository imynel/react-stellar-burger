import React, { useState } from 'react'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

export const InputComponent = ({placeholder, type, icon}) => {
    const [value, setValue] = useState('')

    return (
        <>
          <Input
            placeholder={placeholder}
            type={type}
            icon={icon}
            value={value}
            onChange={e => setValue(e.target.value)}
          ></Input>
        </>
    )
}