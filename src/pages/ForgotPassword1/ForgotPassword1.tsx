import React, { useState } from 'react'
import styles from './ForgotPassword1.module.css'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from '../../services/hooks/hooks'
import { postEmailReset } from '../../services/actions/password-reset'


export const ForgotPassword1 = (): JSX.Element => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(postEmailReset(email))
        navigate('/reset-password')
    }

    return (
        <form className={styles.mainContainer} onSubmit={(e) => onSubmit(e)}>
            <h1 className={`${styles.title} mb-4`}>Восстановление пароля</h1>
            <EmailInput 
                placeholder='Укажите e-mail'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                extraClass='mb-4'
            />
            <div className={styles.button}>
                <Button 
                    htmlType="submit" 
                    type="primary" 
                    size="medium" 
                    extraClass='mb-20'
                    disabled={email ? false : true}
                    >Восстановить
                </Button>
            </div>
            <div className={styles.container}>
                <p className={`${styles.subtitle} mb-4`}>Вспомнили пароль?</p>
                <Link to='/login'>
                    <Button htmlType="button" type="secondary" size="medium">
                        Войти
                    </Button>
                </Link>
            </div>
        </form>
    )
}
