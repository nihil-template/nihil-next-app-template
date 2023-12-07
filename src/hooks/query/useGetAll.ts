import { useQuery } from '@tanstack/react-query';
import { apiGet } from '@/src/utils/axios';

export const useGetAll = <T>({ key, url, options, }) => {
  const { data, } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data, } = await apiGet<T>(url);

      return data;
    },
  });
};
