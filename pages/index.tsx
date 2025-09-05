import React, { useState, useEffect } from 'react';
import { Unit } from '../types';

import Screen1 from '../components/screens/Screen1';
import Screen2 from '../components/screens/Screen2';
import Screen2_5 from '../components/screens/Screen2_5'; 
import Screen3 from '../components/screens/Screen3';
import Screen4 from '../components/screens/Screen4';

const HomePage = () => {
  const [screen, setScreen] = useState(1);
  const [clientName, setClientName] = useState<string>('...');
  
  const [clientId, setClientId] = useState<number | null>(null);
  const [units, setUnits] = useState<Unit[]>([]);
  const [isLoadingUnits, setIsLoadingUnits] = useState<boolean>(false);

  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

    useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await fetch('https://get-client-105974715849.southamerica-east1.run.app/');
        if (!response.ok) { throw new Error('Falha ao buscar dados do cliente'); }
        const data = await response.json();
        setClientName(data.nome);
        setClientId(data.id_cliente); // GUARDE O ID DO CLIENTE
      } catch (error) {
        console.error("Erro ao contatar a API de cliente:", error);
        setClientName('Visitante');
      }
    };
    fetchClientData();
  }, []);

const handleFetchUnits = async () => {
    if (!clientId) return; // Não faz nada se não tivermos um ID de cliente

    setIsLoadingUnits(true);
    setScreen(2.5); // Navega para a tela de seleção para mostrar o estado "Carregando..."

    try {
      const response = await fetch(`https://get-uc-105974715849.europe-west1.run.app?id_cliente=${clientId}`);
      if (!response.ok) { throw new Error('Falha ao buscar UCs'); }
      const ucsData = await response.json();
      
      const formattedUnits = ucsData.map((unit: any, index: number) => ({
        id: index,
        uc: unit.Unidade,
        address: unit.Endereço
      }));

      // --- LÓGICA DE DECISÃO PRINCIPAL ---
      if (formattedUnits.length === 1) {
        // CASO 1: Existe exatamente UMA Unidade Consumidora
        const singleUnit = formattedUnits[0];
        setUnits(formattedUnits); // Define a lista de UCs (boa prática)
        setSelectedUnit(singleUnit); // Seleciona a única UC automaticamente
        setScreen(3); // Pula a seleção e vai direto para a tela de detalhes (Screen3)
      } else {
        // CASO 2: Existem 0 ou mais de 1 UCs
        setUnits(formattedUnits);
        // A tela já é a 2.5, então apenas deixamos o usuário prosseguir normalmente
      }
      // --- FIM DA LÓGICA DE DECISÃO ---

    } catch (error) {
      console.error("Erro ao contatar a API de UCs:", error);
      setUnits([]); // Limpa a lista em caso de erro
    } finally {
      setIsLoadingUnits(false); // Finaliza o carregamento em todos os casos
    }
  };

  const handleGoHome = () => {
    setScreen(1); // Volta para a tela Home
    setSelectedUnit(null); // Limpa a unidade selecionada
    setUnits([]); // Limpa também a lista de UCs ao voltar para home
  };

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <Screen1 setScreen={setScreen} clientName={clientName} onHomeClick={handleGoHome} />;
      case 2:
        // Passe a nova função para a Screen2
        return <Screen2 setScreen={setScreen} clientName={clientName} onHomeClick={handleGoHome} onContinueClick={handleFetchUnits} />;
      case 2.5: 
        return <Screen2_5 
          setScreen={setScreen} 
          clientName={clientName} 
          units={units} // Passe a lista de UCs do estado
          isLoading={isLoadingUnits} // Passe o estado de carregamento
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
          onHomeClick={handleGoHome}
        />;
      // ... o resto dos cases continuam os mesmos
      case 3:
        return <Screen3 setScreen={setScreen} clientName={clientName} selectedUnit={selectedUnit} onHomeClick={handleGoHome}  units={units} />;
      case 4:
        return <Screen4 setScreen={setScreen} clientName={clientName} onHomeClick={handleGoHome} />;
      default:
        return <Screen1 setScreen={setScreen} clientName={clientName} onHomeClick={handleGoHome} />;
    }
  };

  return <div>{renderScreen()}</div>;
};

export default HomePage;