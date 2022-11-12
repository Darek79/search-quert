import axios from 'axios';

const axiosGet = axios.create({
    baseURL: '/api',
});

export async function axiosHanlder(q: string, route: string) {
    const { data } = await axiosGet.get(`/${route}/?q=${q}`);
    console.log(data);
    return data;
}

export async function axiosHanlderStatus(route: string, id: string, visited: '1' | '') {
    const { data } = await axiosGet.get(`/${route}/?id=${id}&visited=${visited}`);
    console.log(data);
    return data;
}
