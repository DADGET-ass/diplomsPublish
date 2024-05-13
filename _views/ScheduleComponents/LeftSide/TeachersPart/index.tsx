
import { useEffect, useState } from 'react';
import cls from './index.module.scss';
import { IAllTeachers, getTeachers } from '@/data/api';
import { Search } from '@/_views/ui/Search';
import { TeacherItem } from './Teachers';

const TeachersPart = () => {
    const [teachers, setTeachers] = useState<Array<IAllTeachers>>([]);
    const [searchValue, setSearchValue] = useState<string>('')

 

    const teachersPart = (
        <>
            <div className={cls.facults}>
                <Search
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                />

               
            </div>
        </>
    );
    return teachersPart;
}
export { TeachersPart };

