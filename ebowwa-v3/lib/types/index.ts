export interface AvatarState {
  position: [number, number, number];
  rotation: [number, number, number];
  isAnimating: boolean;
  currentAnimation: string | null;
}

export interface NavigationState {
  currentSection: string;
  previousSection: string | null;
  isTransitioning: boolean;
}

export interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  status: string;
  color: string;
}

export interface JourneyStage {
  id: string;
  title: string;
  description: string;
  color: string;
}