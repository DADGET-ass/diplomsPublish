import { Form } from '@/_views/ui/Form';
import cls from './index.module.scss';
import { Button } from '@/_views/ui/Button';
import { Input } from '@/_views/ui/Input';
import { FormEvent, useState } from 'react';
import { registrUser } from '@/data/api';
import { setCookie } from '@/utils/cookies';
import { UserRoleEnum, useAuthStore } from '@/data/store/useAuthStore';
import { useRouter } from 'next/router';

interface IFormData {
    login: string,
    password: string,
    rePassword: string,
}

const RegistrPage = () => {
    const { setAuth, setUserRole, userRole } = useAuthStore();
    const { push } = useRouter()
   

    const registration = (
        <div className={cls.authBlock}>

            <div className={cls.registrBlock}>
                <Form >
                    <Input type="text" label="Логин" placeholder={'Введите логин'} required  />
                    <Input type="password" label="Пароль" placeholder={'Введите пароль'} required  />
                    <Input type="password" label="Повторите пароль" placeholder={'Повторите пароль'} required />
                    <Button type='submit'>
                        Вход
                    </Button>
                   
               
                </Form>
            </div>

        </div>
    )
    return registration;
};

export { RegistrPage };