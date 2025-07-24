'use client';

import { useDispatch, useSelector } from 'react-redux';
import { selectAvatarState, setPosition, setRotation, setAnimation } from '../store/slices/avatarSlice';
import { selectNavigationState } from '../store/slices/navigationSlice';

export function useAvatarControls() {
  const dispatch = useDispatch();
  const avatarState = useSelector(selectAvatarState);
  const navigationState = useSelector(selectNavigationState);

  const updateAvatarForSection = (section: string) => {
    switch (section) {
      case 'hero':
        dispatch(setPosition([0, -1, 0]));
        dispatch(setRotation([0, Math.PI, 0]));
        dispatch(setAnimation('idle'));
        break;
      case 'vision':
        dispatch(setPosition([1, -0.5, -1]));
        dispatch(setRotation([0, Math.PI * 1.25, 0]));
        dispatch(setAnimation('thinking'));
        break;
      case 'journey':
        dispatch(setPosition([-1, -0.5, -1]));
        dispatch(setRotation([0, Math.PI * 0.75, 0]));
        dispatch(setAnimation('walking'));
        break;
      case 'projects':
        dispatch(setPosition([0, -0.5, -2]));
        dispatch(setRotation([0, Math.PI * 1.1, 0]));
        dispatch(setAnimation('working'));
        break;
      case 'contact':
        dispatch(setPosition([0, -0.75, -1]));
        dispatch(setRotation([0, Math.PI, 0]));
        dispatch(setAnimation('waving'));
        break;
      default:
        dispatch(setPosition([0, -1, 0]));
        dispatch(setRotation([0, Math.PI, 0]));
        dispatch(setAnimation('idle'));
    }
  };

  return {
    avatarState,
    updateAvatarForSection,
  };
}