import { methodDefault } from "../defaultAPI";


interface IBurden{
    _id:string,
    hH: number,
    mounth:Date,

}

export interface ITeachers {
    _id: string,
    surname: string,
    name: string,
    patronymic: string,
    aH: number,
    burden: Array<IBurden>

}

 type IResponseTeachers = {
    teachers: Array<ITeachers>;
  };

export const getTeachersByDiscipline = ({ id }: { id: string }): Promise<IResponseTeachers> =>
    methodDefault({
        path: `teacher/getTeacherByDiscipline?id=${id}`,
        method: "GET",
    });
