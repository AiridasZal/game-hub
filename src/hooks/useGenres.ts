import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres')

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => 
    apiClient.getAll({}),
    staleTime: 7 * 24 * 60 * 60 * 1000, // 1W
    initialData: genres
})
    
export default useGenres;