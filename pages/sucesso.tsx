import { useAppContext } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import styled from 'styled-components';

// Importe o novo componente de conteúdo
import { SuccessContent } from '@/components/pages/SuccessPage/SuccessContent';

// Estilos que pertencem ao layout da PÁGINA
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 2rem 2rem;
`;

export default function SuccessPage() {
  const { navigateHome, startNewSession } = useAppContext();

  return (
    <PageContainer>
      <Header onHomeClick={navigateHome} />
      
      <SuccessContent />
      
      <ButtonWrapper>
        <Button onClick={startNewSession}>RETORNAR AO INÍCIO</Button>
      </ButtonWrapper>
    </PageContainer>
  );
}