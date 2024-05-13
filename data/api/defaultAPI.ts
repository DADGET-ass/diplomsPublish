//#region API_URL

import { getCookie } from "@/utils/cookies";

export const API_URL: string = "localhost";
//#endregion

export type IMethodDefault = {
    path: string;
    body?: BodyInit;
    method?: "GET" | "POST" | "DELETE";
    cookie?: string,
};

export const methodDefault = ({
    path,
    body,
    method,
    cookie,
}: IMethodDefault): Promise<any> =>
    fetch(`${API_URL}/${path}`, {
        body,
        method,
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${getCookie('token', cookie) || ''}`,
        },
    })
        .then(async (e) => {
            return await e.json()

        })
        .catch((e) => ({ error: "No Connect" }));
