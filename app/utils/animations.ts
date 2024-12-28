import { View, Color } from '@nativescript/core';

export function createPressAnimation(view: View): Promise<void> {
  // Store original colors
  const originalBg = view.backgroundColor || new Color('#3b82f6'); // blue-500
  const originalColor = view.color || new Color('#ffffff');

  return new Promise<void>((resolve) => {
    view.animate({
      backgroundColor: originalColor,
      color: originalBg,
      duration: 150,
      curve: 'easeInOut'
    }).then(() => {
      view.animate({
        backgroundColor: originalBg,
        color: originalColor,
        duration: 150,
        curve: 'easeInOut'
      }).then(() => resolve());
    });
  });
}