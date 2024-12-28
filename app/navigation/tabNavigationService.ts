import Vue from 'nativescript-vue';
import { routes, RouteKey } from './routes';

class TabNavigationService {
  private static instance: TabNavigationService;
  
  static getInstance(): TabNavigationService {
    if (!TabNavigationService.instance) {
      TabNavigationService.instance = new TabNavigationService();
    }
    return TabNavigationService.instance;
  }

  async navigateToTab(tab: RouteKey) {
    const component = await routes[tab]();
    return Vue.prototype.$navigateTo(component.default, {
      clearHistory: true,
      transition: {
        name: 'fade',
        duration: 200
      }
    });
  }
}

export const tabNavigationService = TabNavigationService.getInstance();