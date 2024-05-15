"use client"
import React, { useState } from 'react';
import { HiggsPotential, HiggsBosomMass, HiggsFermionInteraction, HiggsGaugeBosonInteraction } from './index';

const HiggsBosonPage: React.FC = () => {
  const [higgsMassParameter, setHiggsMassParameter] = useState(100);
  const [higgsMassUnit, setHiggsMassUnit] = useState<'GeV' | 'lbs' | 'kg'>('GeV');
  const [higgsSelfCoupling, setHiggsSelfCoupling] = useState(0.1);
  const [fermionField, setFermionField] = useState(10);
  const [yukawaCoupling, setYukawaCoupling] = useState(0.5);
  const [covariantDerivative, setCovariantDerivative] = useState(20);

  return (
    <div>
      <h1>Higgs Boson Playground</h1>
      <div>
        <label>Higgs Mass Parameter:</label>
        <input
          type="number"
          value={higgsMassParameter}
          onChange={(e) => setHiggsMassParameter(parseFloat(e.target.value))}
        />
        <label>Unit:</label>
        <select
          value={higgsMassUnit}
          onChange={(e) => setHiggsMassUnit(e.target.value as 'GeV' | 'lbs' | 'kg')}
        >
          <option value="GeV">GeV</option>
          <option value="lbs">lbs</option>
          <option value="kg">kg</option>
        </select>
      </div>
      <div>
        <HiggsPotential
          higgsMassParameter={higgsMassParameter}
          higgsSelfCoupling={higgsSelfCoupling}
          higsField={10}
        />
        <HiggsBosomMass higgsMassParameter={higgsMassParameter} unit={higgsMassUnit} />
        <HiggsFermionInteraction
          fermionField={fermionField}
          yukawaCoupling={yukawaCoupling}
          higgsField={10}
        />
        <HiggsGaugeBosonInteraction covariantDerivative={covariantDerivative} />
      </div>
    </div>
  );
};

export default HiggsBosonPage;