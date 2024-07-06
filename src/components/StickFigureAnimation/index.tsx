import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';
import {
  StickFigureContainer,
  Head,
  Body,
  LeftArm,
  RightArm,
  LeftLeg,
  RightLeg,
  fallAnimation,
} from './styles';

const StickFigureAnimation: React.FC = () => {
  const [isFalling, setIsFalling] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta: number = scrollTop - lastScrollTop;
      const scrollSpeed: number = Math.abs(scrollDelta);

      if (scrollSpeed > 50 && !isFalling) {
        setIsFalling(true);
      } else if (scrollSpeed <= 50 && isFalling) {
        setIsFalling(false);
      }

      if (!isFalling) {
        const newTop: number = 50 + (scrollTop / (document.body.scrollHeight - window.innerHeight)) * 50;
        document.getElementById('stickFigure')!.style.top = `${newTop}%`;
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFalling, lastScrollTop]);

  return (
    <StickFigureContainer id="stickFigure" style={{ animation: isFalling ? css`${fallAnimation} 0.5s forwards` : 'none' }}>
      <Head />
      <Body />
      <LeftArm style={{ animation: isFalling ? 'none' : '' }} />
      <RightArm style={{ animation: isFalling ? 'none' : '' }} />
      <LeftLeg style={{ animation: isFalling ? 'none' : '' }} />
      <RightLeg style={{ animation: isFalling ? 'none' : '' }} />
    </StickFigureContainer>
  );
};

export default StickFigureAnimation;