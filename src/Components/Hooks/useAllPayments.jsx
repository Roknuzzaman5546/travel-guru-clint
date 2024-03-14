import { useQuery } from '@tanstack/react-query';
import UseAxiospublic from './useaxiospublic';

const useAllPayments = () => {
    const axiospublic = UseAxiospublic()
    const { data: allPayments = [], refetch } = useQuery({
        queryKey: ['allPayments'],
        queryFn: async () => {
            const res = await axiospublic.get(`/allPayments`)
            console.log(res.data)
            return res.data;
        }
    })
    return [allPayments, refetch]
};

export default useAllPayments;