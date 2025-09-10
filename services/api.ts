import { Unit } from '@/types';

export const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    console.error('API Fetcher Error:', res);
    throw new Error('Ocorreu um erro ao buscar os dados da API.');
  }
  return res.json();
};

export const unitsFetcher = async (url: string): Promise<Unit[]> => {
  const ucsData: { Unidade: string; Endereço: string }[] = await fetcher(url);
  return ucsData.map(unit => ({
    uc: unit.Unidade,
    address: unit.Endereço,
  }));
};