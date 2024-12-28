import { Frame } from '@nativescript/core';
import Vue from 'nativescript-vue';

export interface NavigateOptions {
  clearHistory?: boolean;
  transition?: {
    name: string;
    duration: number;
  };
}

class NavigationService {
  private static instance: NavigationService;
  private frame: Frame | null = null;

  private constructor() {}

  static getInstance(): NavigationService {
    if (!NavigationService.instance) {
      NavigationService.instance = new NavigationService();
    }
    return NavigationService.instance;
  }

  setFrame(frame: Frame) {
    this.frame = frame;
  }

  goBack() {
    const frame = this.frame || Frame.topmost();
    if (frame && frame.canGoBack()) {
      frame.goBack();
    } else {
      this.navigateToHome();
    }
  }

  navigateToHome() {
    const frame = this.frame || Frame.topmost();
    if (frame) {
      frame.navigate({
        moduleName: 'components/Home',
        clearHistory: true,
        animated: true,
        transition: {
          name: 'fade',
          duration: 200
        }
      });
    }
  }

  navigate(to: any, props = {}, options: NavigateOptions = {}) {
    Vue.prototype.$navigateTo(to, {
      props,
      ...options,
      transition: options.transition || {
        name: 'slide',
        duration: 200
      }
    });
  }
}

export const navigationService = NavigationService.getInstance();