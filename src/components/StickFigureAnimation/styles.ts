import styled, { keyframes, css } from 'styled-components';

const fallAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
`;

const walkAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(30deg);
  }
`;

const StickFigureContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

const Head = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
  left: 40px;
  top: 0;
`;

const Body = styled.div`
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: black;
  left: 49px;
  top: 20px;
`;

const Arm = styled.div`
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: black;
  top: 30px;
`;

const LeftArm = styled(Arm)`
  left: 20px;
  transform-origin: right center;
  animation: ${css`${walkAnimation} 0.5s infinite alternate`};
`;

const RightArm = styled(Arm)`
  right: 20px;
  transform-origin: left center;
  animation: ${css`${walkAnimation} 0.5s infinite alternate-reverse`};
`;

const Leg = styled.div`
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: black;
  top: 60px;
`;

const LeftLeg = styled(Leg)`
  left: 39px;
  transform-origin: top center;
  animation: ${css`${walkAnimation} 0.5s infinite alternate`};
`;

const RightLeg = styled(Leg)`
  right: 39px;
  transform-origin: top center;
  animation: ${css`${walkAnimation} 0.5s infinite alternate-reverse`};
`;

export {
  StickFigureContainer,
  Head,
  Body,
  LeftArm,
  RightArm,
  LeftLeg,
  RightLeg,
};