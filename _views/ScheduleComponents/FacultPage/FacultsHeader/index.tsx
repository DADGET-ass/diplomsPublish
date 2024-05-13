import {
    FormEvent,
    useEffect,
    useState
} from 'react';
import { Title } from '@/_views/ui/Title/Index';
import { Arcticle } from '@/_views/ui/Arcticle';
import { Button } from '@/_views/ui/Button';
import { Facults } from '..';
import { PopUp } from '@/_views/ui/PopUp';
import { Input } from '@/_views/ui/Input';
import { Form } from '@/_views/ui/Form';
import { addFacults } from '@/data/api';
import { IFacultets, getFacultets } from '@/data/api';
import { TextArea } from '@/_views/ui/textArea';

import cls from './index.module.scss';

const FacultsPage = () => {
    const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [name, setName] = useState<string>('')

    const [groups, setGroups] = useState<string>('')
    const [audithories, setAudithories] = useState<string>('')
    const [groupsArray, setGroupsArray] = useState<Array<string>>([])
    const [audithoriesArray, setAudithoriesArray] = useState<Array<string>>([])

    const [facultets, setFacultets] = useState<Array<IFacultets>>([]);


  



  
    return (
        <Arcticle >
            <div className={cls.title}>
                <Title>Факультеты</Title>
                <Button darkBtn onClick={() => setOpenPopUp(true)}>Создать</Button>
            </div>
            
            {isOpenPopUp && (
                <PopUp title='Создание факультета' setOpenPopUp={setOpenPopUp}>
                    <Form >
                        <Input
                            type="text"
                            autoFocus
                            label="Название"
                            placeholder={''}
                            required
                            value={name}
                            onChange={(value) => setName(value)} />

                        <TextArea
                            type="text"
                            label="Группа"
                            value={name}
                            onChange={(value) => setGroups(value)}
                        />
                        {/* <Input type="text" label="Аудитории" placeholder={''} required value={audithories} onChange={(value) => setAudithories(value)} /> */}
                        <Button lightBtn type='submit'>
                            Создать
                        </Button>
                        {error && <span>{error}</span>}
                    </Form>
                </PopUp>
            )}
        </Arcticle >

    );
};

export { FacultsPage };