import React from 'react';
import Image from 'next/image';
import { Unit } from '@/types';
import { Title, AddressCard, AddressText, ChangeButton } from './ProposalHeader.styles';

interface ProposalHeaderProps {
  selectedUnit: Unit;
  totalUnits: number;
  onChangeUnit: () => void;
}

export const ProposalHeader = ({ selectedUnit, totalUnits, onChangeUnit }: ProposalHeaderProps) => {
  return (
    <>
      <Title>Faça parte do Mercado Livre, com a credibilidade de uma empresa que você já conhece.</Title>
      <AddressCard>
        <AddressText>
          <strong>Unidade (UC):</strong> {selectedUnit.uc}<br/>
          <strong>Endereço:</strong> {selectedUnit.address}
        </AddressText>
        {totalUnits > 1 && (
          <ChangeButton onClick={onChangeUnit}>
            <Image src="/images/change_icon.svg" alt="Trocar Unidade" width={24} height={24} />
            Trocar
          </ChangeButton>
        )}
      </AddressCard>
    </>
  );
};