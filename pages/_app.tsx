import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProvider, useAppContext } from '@/context/AppContext';
import { theme } from '@/styles/theme';
import '@/styles/globals.css';

const PROTECTED_ROUTES = ['/consentimento', '/selecionar-unidade', '/proposta', '/sucesso'];
const CLIENT_SESSION_KEY = 'mercado-livre-client-session';

// Este componente lida com a inicialização e a proteção
const SessionManager = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { clientId, isClientLoading, mutateClient } = useAppContext();
  const pathIsProtected = PROTECTED_ROUTES.includes(router.pathname);

  useEffect(() => {
    const storedSession = sessionStorage.getItem(CLIENT_SESSION_KEY);
    
    // Lógica de Inicialização no primeiro carregamento do cliente
    if (router.pathname === '/') {
      // Se estamos na HOME, SEMPRE inicie uma nova sessão no refresh
      sessionStorage.removeItem(CLIENT_SESSION_KEY);
      mutateClient();
    } else if (storedSession) {
      // Se estamos em outra página e TEMOS uma sessão, restaure-a
      mutateClient(JSON.parse(storedSession), false); // Restaura sem revalidar
    }
  }, [mutateClient, router.pathname]); // Executa a cada mudança de página

  useEffect(() => {
    // Lógica de Proteção de Rota
    if (isClientLoading) return; // Espere a verificação terminar

    if (!clientId && pathIsProtected) {
      router.replace('/');
    }
  }, [clientId, isClientLoading, pathIsProtected, router]);

  if (!clientId && pathIsProtected) {
    return null; // Evita flash de conteúdo
  }
  
  return <>{children}</>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <SessionManager>
          <Component {...pageProps} />
        </SessionManager>
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;