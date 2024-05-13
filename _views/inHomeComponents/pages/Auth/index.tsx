import { FormEvent, useState } from 'react';

import { Header } from '@/_views/ui/Header';
import { Button } from '@/_views/ui/Button';
import { Input } from '@/_views/ui/Input';
import { Form } from '@/_views/ui/Form';
import { authUser } from '@/data/api';
import { setCookie } from '@/utils/cookies';
import { useRouter } from 'next/router';
import { getFacultets } from '@/data/api';
import { UserRoleEnum, useAuthStore } from '@/data/store/useAuthStore';

import cls from './index.module.scss';

const Auth = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [validError, setValidError] = useState<string>('')
    const { push } = useRouter();
    const { setAuth, userRole, setUserRole } = useAuthStore()



    return (

        <div className={cls.authBlock}>

            <div className={cls.loginBlock}>
                <Form >
                    <Input type="text" label="Логин" autoFocus placeholder={'Введите логин'} required value={login} onChange={(value) => setLogin(value)} />
                    <Input type="password" label="Пароль" placeholder={'Введите пароль'} required value={password} onChange={(value) => setPassword(value)} />
                    <Button type='submit'>
                        Вход
                    </Button>
                    {validError && <div className={cls.error}>{validError}</div>}
                </Form>
            </div>

        </div>
    );
}

export { Auth };