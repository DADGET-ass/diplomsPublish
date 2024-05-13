import { FC, useState } from 'react';

import { ArrowIcon } from '@/_views/ui/svg_dynamic/base.svg';
import { GroupItem } from '../GroupItem';
import { ICourses } from '@/data/api';

import cls from './index.module.scss';


const CourseItem = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const courseItem = (
        <>
            <div className={cls.coursesBlock}>
                <div className={cls.name}>
      
                </div>
      
            </div >

       
        </>
    );
    return courseItem
};

export { CourseItem }