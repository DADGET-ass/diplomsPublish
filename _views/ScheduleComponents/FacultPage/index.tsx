import {
    FC,
    useEffect,
    useState
} from 'react';

import { InnerFacultItem } from './FacultItem';

import { IFacultets, getFacultets } from '@/data/api';

import cls from './index.module.scss';

interface FacultsProps {
    isOpenPopUp: boolean;
    facultets: Array<IFacultets>;
}

const Facults: FC<FacultsProps> = ({ facultets }) => {

    return (
        <div className={cls.facults}>

     

        </div>
    )
}

export { Facults };