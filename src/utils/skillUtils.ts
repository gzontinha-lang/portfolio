/**
 * Utility functions for skill-related operations
 * Following Single Responsibility Principle
 */

import { SkillLevel } from '../types';

/**
 * Gets the width percentage for a skill level
 * @param level - The skill level
 * @returns The width as a percentage string
 */
export const getLevelWidth = (level: SkillLevel): string => {
  const widthMap: Record<SkillLevel, string> = {
    advanced: '90%',
    intermediate: '70%',
    beginner: '50%',
  };
  
  return widthMap[level] || '50%';
};

/**
 * Gets the color gradient for a skill level
 * @param level - The skill level
 * @returns The CSS variable name for the gradient
 */
export const getLevelColor = (level: SkillLevel): string => {
  const colorMap: Record<SkillLevel, string> = {
    advanced: 'var(--gradient-1)',
    intermediate: 'var(--gradient-2)',
    beginner: 'var(--gradient-3)',
  };
  
  return colorMap[level] || 'var(--gradient-3)';
};

