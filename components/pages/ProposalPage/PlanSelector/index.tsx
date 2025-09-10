import React from 'react';
import { PlanSelectorContainer, RecommendedTag, PlanToggle, ToggleButton } from './PlanSelector.styles';

type Plan = 'power' | 'light';

interface PlanSelectorProps {
  activePlan: Plan;
  onPlanChange: (plan: Plan) => void;
}

export const PlanSelector = ({ activePlan, onPlanChange }: PlanSelectorProps) => {
  return (
    <PlanSelectorContainer>
      <RecommendedTag>Recomendado</RecommendedTag>
      <PlanToggle>
        <ToggleButton active={activePlan === 'power'} onClick={() => onPlanChange('power')}>
          Plano Power
        </ToggleButton>
        <ToggleButton active={activePlan === 'light'} onClick={() => onPlanChange('light')}>
          Plano Light
        </ToggleButton>
      </PlanToggle>
    </PlanSelectorContainer>
  );
};