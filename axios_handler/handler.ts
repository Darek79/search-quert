import axios from 'axios';

const axiosGet = axios.create({
    baseURL: '/api',
});

export async function axiosHandler(q: string, route: string) {
    const { data } = await axiosGet.get(`/${route}/?q=${q}`);
    return data;
}

export async function axiosHandlerStatus(route: string, id: string, visited: '1' | '') {
    const { data } = await axiosGet.get(`/${route}/?id=${id}&visited=${visited}`);
    return data;
}
