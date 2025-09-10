import React from 'react';
import { Unit } from '@/types/index';
import Button from '@/components/ui/Button';
import { 
  ContentContainer, 
  Title, 
  UnitCard, 
  UnitInfo, 
  RadioInput, 
  CustomRadio 
} from './UnitSelectionList.styles';

interface UnitSelectionListProps {
  units: Unit[];
  selectedUnit: Unit | null;
  onSelectUnit: (unit: Unit) => void;
  onConfirm: () => void;
}

export const UnitSelectionList = ({ units, selectedUnit, onSelectUnit, onConfirm }: UnitSelectionListProps) => {
  return (
    <ContentContainer>
      <Title>
        Para simularmos a sua energia limpa e mais barata, pedimos que selecione a <strong>Unidade Consumidora.</strong>
      </Title>
      <div>
        {units.map(unit => (
          <UnitCard key={unit.uc} isSelected={selectedUnit?.uc === unit.uc}>
            <RadioInput
              type="radio"
              name="unit-selection"
              value={unit.uc}
              checked={selectedUnit?.uc === unit.uc}
              onChange={() => onSelectUnit(unit)}
            />
            <CustomRadio isSelected={selectedUnit?.uc === unit.uc} />
            <UnitInfo>
              <strong>UC:</strong> {unit.uc}<br />
              <strong>Endereço:</strong> {unit.address}
            </UnitInfo>
          </UnitCard>
        ))}
      </div>
      <Button onClick={onConfirm} disabled={!selectedUnit}>
        VER MINHA ECONOMIA
      </Button>
    </ContentContainer>
  );
};