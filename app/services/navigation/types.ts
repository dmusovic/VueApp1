export interface NavigationTransition {
  name: string;
  duration: number;
}

export interface NavigationState {
  currentRoute: string;
  params: Record<string, any>;
}

export type NavigationDirection = 'left' | 'right';

export interface NavigationOptions {
  transition?: NavigationTransition;
  clearHistory?: boolean;
}