import { NavigationState } from './types';

class NavigationStateManager {
  private static instance: NavigationStateManager;
  private state: NavigationState = {
    currentRoute: 'home',
    params: {}
  };
  private history: NavigationState[] = [];

  private constructor() {}

  static getInstance(): NavigationStateManager {
    if (!NavigationStateManager.instance) {
      NavigationStateManager.instance = new NavigationStateManager();
    }
    return NavigationStateManager.instance;
  }

  pushState(route: string, params: Record<string, any> = {}) {
    this.history.push({ ...this.state });
    this.state = { currentRoute: route, params };
  }

  popState(): NavigationState | undefined {
    const previousState = this.history.pop();
    if (previousState) {
      this.state = previousState;
    }
    return previousState;
  }

  getCurrentState(): NavigationState {
    return { ...this.state };
  }

  isInLesson(): boolean {
    return this.state.currentRoute.startsWith('lesson-');
  }

  clearHistory() {
    this.history = [];
    this.state = {
      currentRoute: 'home',
      params: {}
    };
  }
}

export const navigationState = NavigationStateManager.getInstance();