import { useRouter } from 'next/router';
import { useAppContext } from '@/context/AppContext';
import Header from '@/components/layout/Header';
import styled from 'styled-components';

// Ajuste os caminhos de importação para apontar para as pastas dos componentes
import { ConsentContent } from '@/components/pages/ConsentPage/ConsentContent';
import { ConsentFooter } from '@/components/pages/ConsentPage/ConsentFooter';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default function ConsentPage() {
  const { navigateHome } = useAppContext();
  const router = useRouter();

  const handleContinue = () => {
    router.push('/selecionar-unidade');
  };

  return (
    <PageContainer>
      <Header onHomeClick={navigateHome} />
      <ConsentContent onContinue={handleContinue} />
      <ConsentFooter />
    </PageContainer>
  );
}