import { useState, useEffect } from 'react';
import { Facultets } from './Facults';
import { IFacultets, getFacultets } from '@/data/api';
import { Search } from '@/_views/ui/Search';
import cls from './index.module.scss';

const FacultsPart = () => {

    const [searchValue, setSearchValue] = useState<string>('')



    return (
        <div className={cls.facults}>
            <Search
                setSearchValue={setSearchValue}
                searchValue={searchValue}
            />

        
        </div>
    );
};

export { FacultsPart };
