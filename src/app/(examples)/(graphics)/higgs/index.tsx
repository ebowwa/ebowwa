import React, { useState, useEffect } from 'react';

export const HiggsPotential: React.FC<{
  higgsMassParameter: number;
  higgsSelfCoupling: number;
  higsField: number;
}> = ({ higgsMassParameter, higgsSelfCoupling, higsField }) => {
  const potential = higgsMassParameter ** 2 * higsField ** 2 + higgsSelfCoupling * higsField ** 4;
  return <div>Higgs Potential: {potential.toFixed(2)}</div>;
};

export interface HiggsBosomMassProps {
  higgsMassParameter: number;
  unit: 'GeV' | 'lbs' | 'kg';
}

export const HiggsBosomMass: React.FC<HiggsBosomMassProps> = ({ higgsMassParameter, unit }) => {
  const [higgsBosomMass, setHiggsBosomMass] = useState(0);

  useEffect(() => {
    let massValue;
    switch (unit) {
      case 'GeV':
        massValue = 2 * higgsMassParameter;
        break;
      case 'lbs':
        massValue = (2 * higgsMassParameter) / (1.783e-27 * 2.205);
        break;
      case 'kg':
        massValue = (2 * higgsMassParameter) / 1.783e-27;
        break;
      default:
        massValue = 2 * higgsMassParameter;
    }
    setHiggsBosomMass(massValue);
  }, [higgsMassParameter, unit]);

  return (
    <div>
      <div>Higgs Boson Mass: {higgsBosomMass.toFixed(2)} {unit}</div>
      <div>Higgs Mass Parameter: {higgsMassParameter.toFixed(2)} GeV</div>
    </div>
  );
};

export const HiggsFermionInteraction: React.FC<{
  fermionField: number;
  yukawaCoupling: number;
  higgsField: number;
}> = ({ fermionField, yukawaCoupling, higgsField }) => {
  const interaction = -yukawaCoupling * fermionField * higgsField;
  return <div>Higgs-Fermion Interaction: {interaction.toFixed(2)}</div>;
};

export const HiggsGaugeBosonInteraction: React.FC<{
  covariantDerivative: number;
}> = ({ covariantDerivative }) => {
  const interaction = covariantDerivative ** 2;
  return <div>Higgs-Gauge Boson Interaction: {interaction.toFixed(2)}</div>;
};