import axios from 'axios';

const axiosGet = axios.create({
    baseURL: '/api/findProduct',
});

export async function axiosHanlder(q: string) {
    const { data } = await axiosGet.get(`/?q=${q}`);
    console.log(data);
    return data;
}
