/* eslint-disable react/prop-types */
import { useQuery } from 'react-query';
import { getExamples, getExampleById, getExamplesByName, getExamplesByAge, getExamplesByGender } from './api'; // Sesuaikan path

const fetchExamples = async ({ queryKey }) => {
    const [, { id, name, age, gender }] = queryKey;
    if (id) {
        const response = await getExampleById(id);
        return response;
    } else if (name) {
        const response = await getExamplesByName(name);
        return response;
    } else if (age) {
        const response = await getExamplesByAge(age);
        return response;
    } else if (gender) {
        const response = await getExamplesByGender(gender);
        return response;
    } else {
        const response = await getExamples();
        return response;
    }
};

function DataFetcher({id, name, age, gender}) {
    const { data, error, isLoading } = useQuery(['examples', { id, name, age, gender }], fetchExamples);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log(data);

    return (
        <div>
            {data?.length === 0 && <p>Data tidak ditemukan</p>}
            <ul>
                {data?.map(item => (
                    <li key={item.id}>
                        ID: {item.id}, Nama: {item.name}, Umur: {item.age}, Jenis Kelamin: {item.gender}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetcher;
