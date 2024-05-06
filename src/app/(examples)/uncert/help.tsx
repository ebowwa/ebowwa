"use client";
import React, { useState, useEffect } from 'react';

interface UncertaintyPrincipleProps {
  initialPosition: number;
  initialMomentum: number;
}

const UncertaintyPrinciple: React.FC<UncertaintyPrincipleProps> = ({
  initialPosition,
  initialMomentum,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [momentum, setMomentum] = useState(initialMomentum);
  const [uncertainty, setUncertainty] = useState(0);

  const h = 6.62607015e-34; // Planck constant

  useEffect(() => {
    calculateUncertainty();
  }, [position, momentum]);

  const calculateUncertainty = () => {
    const positionUncertainty = position;
    const momentumUncertainty = h / (4 * Math.PI * positionUncertainty);
    const totalUncertainty = positionUncertainty * momentumUncertainty;
    setUncertainty(totalUncertainty);
  };

  const handlePositionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPosition = parseFloat(event.target.value);
    setPosition(newPosition);
  };

  const handleMomentumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMomentum = parseFloat(event.target.value);
    setMomentum(newMomentum);
  };

  return (
    <div>
      <h2>Heisenberg Uncertainty Principle</h2>
      <div>
        <label>Position (Δx):</label>
        <input
          type="number"
          value={position.toFixed(10)}
          onChange={handlePositionChange}
          min={0.0001}
          step={0.0001}
        />
      </div>
      <div>
        <label>Momentum (Δp):</label>
        <input
          type="number"
          value={momentum.toFixed(10)}
          onChange={handleMomentumChange}
          min={0.0001}
          step={0.0001}
        />
      </div>
      <div>
        <label>Uncertainty (Δx × Δp):</label>
        <input
          type="number"
          value={uncertainty.toFixed(10)}
          readOnly
        />
      </div>
      <p>
        The product of the uncertainties in position (Δx) and momentum (Δp) is
        greater than or equal to the Planck constant (h) divided by 4π:
      </p>
      <p>Δx × Δp ≥ h/4π</p>
      <p>
        As you adjust the position and momentum values, you can see how the
        uncertainty changes. The minimum uncertainty is achieved when the
        product of the position and momentum uncertainties is equal to the
        Planck constant divided by 4π.
      </p>
    </div>
  );
};

export default UncertaintyPrinciple;