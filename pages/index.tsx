import { useRouter } from 'next/router';
import { useAppContext } from '@/context/AppContext';
import Header from '@/components/layout/Header';

// Importe os componentes de seção
import { HeroSection } from '@/components/pages/HomePage/HeroSection';
import { IntroSection } from '@/components/pages/HomePage/IntroSection';
import { StepsSection } from '@/components/pages/HomePage/StepsSection';
import { MapSection } from '@/components/pages/HomePage/MapSection';
import styled from 'styled-components';

const ScreenContainer = styled.main`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default function HomePage() {
  const { navigateHome } = useAppContext();
  const router = useRouter();

  const handleStartFlow = () => {
    router.push('/consentimento');
  };

  return (
    <div>
      <Header onHomeClick={navigateHome} />
      <ScreenContainer>
        <HeroSection onStartFlow={handleStartFlow} />
        <IntroSection />
        <StepsSection />
        <MapSection onStartFlow={handleStartFlow} />
      </ScreenContainer>
    </div>
  );
}