import { useQuery } from "react-query";
import { api } from '../api';

type Store = {
  id: string;
  name: string;
  city: string
  state: string
  latitude: number;
  longitude: number;
  revenue: number;
}

type GetStoresResponse = {
  totalCount: number;
  stores: Store[];
}

// Função de busca de produtos na api
export async function getStores(page: number): Promise<GetStoresResponse> {

  const { data, headers } = await api.get('stores', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count'])

  const { stores } = data;

  return {
    stores,
    totalCount
  };
}

// Função de buscar ou atualizar produtos do React Query
export function useStores(page: number) {
  return useQuery(['stores', page], () => getStores(page), {
    staleTime: 1000 * 60 * 10, // Define o tempo que vai estar em fresh de 10 minutos
  });
}

//staleTime: 1000 * 5,  Define o tempo que vai estar em fresh de 5 segundos