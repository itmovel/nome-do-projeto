import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useAppContext } from '@/context/AppContext';
import { unitsFetcher } from '@/services/api';
import Header from '@/components/layout/Header';
import styled, { keyframes } from 'styled-components';

// Importe os componentes de UI
import { UnitSelectionList } from '@/components/pages/SelectUnitPage/UnitSelectionList';
import { NoUnitsFound } from '@/components/pages/SelectUnitPage/NoUnitsFound';
import { ApiErrorDisplay } from '@/components/ui/ApiErrorDisplay';

// --- Styled Components (sem alterações) ---
const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

const rotate = keyframes` from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;

const LoadingContainer = styled.div`
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; padding: 4rem 1rem; gap: 1.5rem;
`;

const Spinner = styled.div`
  border: 5px solid ${({ theme }) => theme.colors.gray};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%; width: 50px; height: 50px;
  animation: ${rotate} 1.5s linear infinite;
`;

const LoadingText = styled.p`
  font-size: 1.1rem; font-weight: 500;
  color: ${({ theme }) => theme.colors.textLight};
`;

// --- Component ---
export default function SelectUnitPage() {
  const { clientId, selectedUnit, handleSelectUnit, navigateHome, setUnits } = useAppContext();
  const router = useRouter();
  const UCS_API_URL = process.env.NEXT_PUBLIC_UCS_API_URL;

    const { data: units, error, isLoading} = useSWR(
    clientId ? `${UCS_API_URL}?id_cliente=${clientId}` : null,
    unitsFetcher,
    { shouldRetryOnError: false }
  );
  

  useEffect(() => {
    if (units) {
      setUnits(units);
    }
  }, [units, setUnits]);

  useEffect(() => {
    if (units && units.length === 1) {
      handleSelectUnit(units[0]);
      router.push('/proposta');
    }
  }, [units, router, handleSelectUnit]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <Spinner />
          <LoadingText>Carregando unidades...</LoadingText>
        </LoadingContainer>
      );
    }
    
    if (error) {
      return (
        <ApiErrorDisplay
          onGoHome={navigateHome}
          message="Não foi possível carregar suas unidades consumidoras. Por favor, verifique sua conexão e tente novamente."
        />
      );
    }

    if (!units || units.length === 0) {
      return <NoUnitsFound onGoBack={() => router.push('/')} />;
    }
    
    if (units.length === 1) {
      return null;
    }

    return (
      <UnitSelectionList 
        units={units}
        selectedUnit={selectedUnit}
        onSelectUnit={handleSelectUnit}
        onConfirm={() => router.push('/proposta')}
      />
    );
  };

  return (
    <PageContainer>
      <Header onHomeClick={navigateHome} />
      {renderContent()}
    </PageContainer>
  );
}