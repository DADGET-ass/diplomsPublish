import { FC, useState } from 'react';

import { Button } from '@/_views/ui/Button';
import { ArrowIcon } from '@/_views/ui/svg_dynamic/base.svg';
import { CourseItem } from '../CourseItem';
import { PopUp } from '@/_views/ui/PopUp';
import { Input } from '@/_views/ui/Input';
import { Form } from '@/_views/ui/Form';
import { IFacultets } from '@/data/api';

import cls from './index.module.scss';



const InnerFacultItem = () => {

    const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);

    const facultItem = (
        <>
            <div className={cls.facultsBlock}>
                <div className={cls.facultContent}>
                    <div className={cls.name}>
                   
                    </div>
                    <Button lightBtn onClick={() => setOpenPopUp(true)}>Редактировать</Button>
                </div>
           
            </div>
         
            {isOpenPopUp && (
                <PopUp title='Редактирование факультета' setOpenPopUp={setOpenPopUp} >
                    <Form>
                        <Input type="text" disabled label="Текущее название" placeholder={''} />
                        <Input type="text" autoFocus label="Новое название" placeholder={''} />
                        <Input type="text" disabled label="Текущие группы" placeholder={''} />
                        <Input type="text" label="Новые группы" placeholder={''} />
                        <Input type="text" disabled label="Текущие аудитории" autoFocus placeholder={''} />
                        <Input type="text" label="Новые аудитории" placeholder={''} />
                        <Button lightBtn type='submit'>Сохранить</Button>
                    </Form>
                </PopUp>
            )}
        </>

    );

    return facultItem
}

export { InnerFacultItem }