import { useQuery } from '@tanstack/react-query';
import UseaxiosPublic from './UseaxiosPublic';

const useAllPayments = () => {
    const axiosPublic = UseaxiosPublic()
    const { data: allPayments = [], refetch } = useQuery({
        queryKey: ['allPayments'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allPayments`)
            console.log(res.data)
            return res.data;
        }
    })
    return [allPayments, refetch]
};

export default useAllPayments;