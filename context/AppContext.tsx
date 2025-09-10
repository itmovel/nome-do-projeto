import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import useSWR, { KeyedMutator } from 'swr';
import { Unit } from '@/types';
import { fetcher } from '@/services/api';
import { useRouter } from 'next/router';

// A interface não precisa mais saber do sessionStorage
interface IAppContext {
  clientName: string;
  clientId: number | null;
  isClientLoading: boolean;
  selectedUnit: Unit | null;
  units: Unit[];
  setUnits: (units: Unit[]) => void;
  handleSelectUnit: (unit: Unit | null) => void;
  navigateHome: () => void;
  startNewSession: () => void;
  mutateClient: KeyedMutator<any>;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const CLIENT_API_URL = process.env.NEXT_PUBLIC_CLIENT_API_URL;

  const { 
    data: clientData, 
    error, 
    isLoading, 
    mutate 
  } = useSWR(CLIENT_API_URL, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: false,
    shouldRetryOnError: false,
  });

  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [units, setUnits] = useState<Unit[]>([]);

  const clientName = !clientData && isLoading ? '...' : (error ? 'Visitante' : clientData?.nome);
  const clientId = clientData?.id_cliente || null;

  const handleSelectUnit = (unit: Unit | null) => setSelectedUnit(unit);

  const navigateHome = useCallback(() => {
    setSelectedUnit(null);
    setUnits([]);
    router.push('/');
  }, [router]);

  const startNewSession = useCallback(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('mercado-livre-client-session');
    }
    setSelectedUnit(null);
    setUnits([]);
    mutate(); 
    router.push('/');
  }, [router, mutate]);

  const value = {
    clientName,
    clientId,
    isClientLoading: isLoading,
    selectedUnit,
    units,
    setUnits,
    handleSelectUnit,
    navigateHome,
    startNewSession,
    mutateClient: mutate,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};