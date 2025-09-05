import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../common/Button';
import { Unit } from '../../types';

// --- Styled Components ---
const PageContainer = styled.div`
  background-color: #f7f7f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.main`
  padding: 1.5rem;
  flex: 1;
`;

const Title = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.5;
  margin-bottom: 2rem;
  strong {
    font-weight: bold;
  }
`;

const UnitCard = styled.label<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 2px solid ${props => props.isSelected ? '#0070f3' : '#e0e0e0'};
  box-shadow: ${props => props.isSelected ? '0 4px 8px rgba(103, 58, 183, 0.2)' : '0 1px 3px rgba(0,0,0,0.05)'};
  transition: all 0.2s ease-in-out;
`;

const UnitInfo = styled.div`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  margin-left: 1rem;
  strong { color: #333; }
`;

const RadioInput = styled.input`
  display: none;
`;

const CustomRadio = styled.div<{ isSelected: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.2s ease;
  border: ${props => props.isSelected ? '2px solid #0070f3' : '1px solid #c0c0c0'};
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: background-color 0.2s ease;
    background-color: ${props => props.isSelected ? '#0070f3' : 'transparent'};
  }
`;

const ButtonWrapper = styled.div`
  padding: 1rem;
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #555;
  padding: 4rem 1rem;
`;

const NoUnitsText = styled(LoadingText)``; // Herda todos os estilos do LoadingText


// --- Component Props ---
type Screen2_5Props = {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  clientName: string;
  units: Unit[];
  isLoading: boolean;
  selectedUnit: Unit | null;
  setSelectedUnit: (unit: Unit) => void;
  onHomeClick: () => void;
};

const Screen2_5 = ({ setScreen, clientName, units, isLoading, selectedUnit, setSelectedUnit, onHomeClick }: Screen2_5Props) => {
  
  const renderContent = () => {
    if (isLoading) {
      return <LoadingText>Carregando Unidades...</LoadingText>;
    }
    if (!isLoading && units.length === 0) {
      return (
         <ContentContainer>
        <NoUnitsText>Você não possui nenhuma unidade consumidora elegível para contratação.</NoUnitsText>
         <ButtonWrapper>
          <Button onClick={() => setScreen(1)}>
              VOLTAR
          </Button>
        </ButtonWrapper>
        </ContentContainer>
      );
    }
    return (
      <div>
        {units.map(unit => (
          <UnitCard key={unit.id} isSelected={selectedUnit?.id === unit.id}>
            <RadioInput
              type="radio"
              name="unit-selection"
              value={unit.id}
              checked={selectedUnit?.id === unit.id}
              onChange={() => setSelectedUnit(unit)}
            />
            <CustomRadio isSelected={selectedUnit?.id === unit.id} />
            <UnitInfo>
              <strong>Unidade (UC):</strong> {unit.uc}<br />
              <strong>Endereço:</strong> {unit.address}
            </UnitInfo>
          </UnitCard>
        ))}
      </div>
    );
  };
  
  return (
    <PageContainer>
      <Header onHomeClick={onHomeClick} clientName={clientName} />
      <ContentContainer>
        <Title>
          Para simularmos a sua energia limpa e mais barata, pedimos que selecione a <strong>Unidade Consumidora.</strong>
        </Title>
        {renderContent()}
      </ContentContainer>
      {!isLoading && units.length > 0 && (
        <ButtonWrapper>
          <Button onClick={() => setScreen(3)} disabled={!selectedUnit}>
              VER MINHA ECONOMIA
          </Button>
        </ButtonWrapper>
      )}
    </PageContainer>
  );
};

export default Screen2_5;