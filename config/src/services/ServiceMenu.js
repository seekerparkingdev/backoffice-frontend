import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;
console.log(apiUrl);
export const getMenu = async() => {
    try {
        const response = await axios.get(`${apiUrl}menu` ,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })

        if(response.status  === 200) { 
            return response
            } else {
                return response.status 
            }
    } catch (error) {
        throw new Error(
            error?.response
                ? `Error en la API: ${error.response.status} - ${
                    error.response.data?.message || 'Error desconocido'
                }`
                : 'Error desconocido'
        );
    }
}