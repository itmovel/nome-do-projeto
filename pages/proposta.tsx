import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import styled from 'styled-components';

// Importe os novos componentes modulares
import { ProposalHeader } from '@/components/pages/ProposalPage/ProposalHeader';
import { PlanSelector } from '@/components/pages/ProposalPage/PlanSelector';
import { PlanDetails } from '@/components/pages/ProposalPage/PlanDetails';

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

const ContentContainer = styled.main`
  padding: 1.5rem 1rem;
`;

export default function ProposalPage() {
  const { selectedUnit, units, navigateHome } = useAppContext(); // Obtenha 'units' para a lógica do botão "Trocar"
  const router = useRouter();
  const [activePlan, setActivePlan] = useState<'power' | 'light'>('power');

  // Proteção de rota para garantir que uma unidade foi selecionada
  useEffect(() => {
    if (!selectedUnit) {
      router.replace('/');
    }
  }, [selectedUnit, router]);

  // Evita um flash de conteúdo renderizando null antes do redirecionamento
  if (!selectedUnit) return null;

  return (
    <PageContainer>
      <Header onHomeClick={navigateHome} />
      <ContentContainer>
        <ProposalHeader 
          selectedUnit={selectedUnit}
          totalUnits={units.length}
          onChangeUnit={() => router.push('/selecionar-unidade')}
        />
        
        <PlanSelector 
          activePlan={activePlan}
          onPlanChange={setActivePlan}
        />

        <PlanDetails activePlan={activePlan} />

        <Button onClick={() => router.push('/sucesso')} style={{ marginTop: '2rem' }}>
          CONTRATAR
        </Button>
      </ContentContainer>
    </PageContainer>
  );
}