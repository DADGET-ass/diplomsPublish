import { FC, useEffect, useState } from 'react';

import { ArrowIcon } from '@/_views/ui/svg_dynamic/base.svg';
import { Arcticle } from '@/_views/ui/Arcticle';
import { SheduleTable } from '../SheduleTable';

import cls from './index.module.scss';
import { ICourses, IFacultets, IGroups, getFacultets } from '@/data/api';
import { Title } from '@/_views/ui/Title/Index';

import { useDateStore } from '@/data/store/useDateStore';
import { ModeEnum, useTabsStore } from '@/data/store/useTabsStore';
import { UserRoleEnum, useAuthStore } from '@/data/store/useAuthStore';
import { SpectateShedule } from '../SpectateShedule';



const Courses = () => {


    return (
        <>

            <div className={cls.group}>
                <div className={cls.facultsBlock}>
                    <div className={cls.name}>
                     
                    </div>
                </div>
            
            </div>
           
        </>
    )
}



const Group= () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const { mode } = useTabsStore();
    const { userRole } = useAuthStore();

    return (
        <>
            <div className={cls.group}>
                <div className={cls.facultsBlock}>
                    <div className={cls.name}>
                   
                    </div>
                </div>
               
            </div>
         
        </>
    )
}



const Facult = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className={cls.group}>
                <div className={cls.facultsBlock}>
                    <div className={cls.name}>

                    </div>
                </div>
        
            </div>
            
        </>
    )
}

const FullShedule = () => {




    return (
        <>
            <Arcticle>

                <div className={cls.title}>
                    <Title>Расписание</Title>
                </div>

  
            </Arcticle>
        </>
    );
};

export { FullShedule }