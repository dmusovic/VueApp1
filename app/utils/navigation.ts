import Vue from 'nativescript-vue';

interface NavigationOptions {
  props?: Record<string, any>;
  transition?: {
    name: string;
    duration: number;
  };
  clearHistory?: boolean;
}

export function navigate(component: any, options: NavigationOptions = {}) {
  return Vue.prototype.$navigateTo(component, {
    ...options,
    transition: options.transition || {
      name: 'slide',
      duration: 200
    }
  });
}

export function navigateBack() {
  return Vue.prototype.$navigateBack();
}

export function navigateWithSlide(component: any, options: NavigationOptions = {}, direction: 'left' | 'right' = 'left') {
  return Vue.prototype.$navigateTo(component, {
    ...options,
    transition: {
      name: direction === 'left' ? 'slideLeft' : 'slideRight',
      duration: 200
    }
  });
}