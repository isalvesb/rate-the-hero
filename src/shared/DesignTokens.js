// shared/DesignTokens.js
export const Spaces = {
    NONE: '0',
    HALF: '4px',
    ONE: '8px',
    ONE_HALF: '12px',
    TWO: '16px',
    THREE: '24px',
    FOUR: '32px',
    FIVE: '40px',
    SIX: '48px',
    SEVEN: '56px',
    EIGHT: '64px'
};

export const BorderRadiuses = {
    SMALL: '4px',
    ONE: '8px',
    TWO: '12px',
    THREE: '16px',
    PILL: '50px',
    FULL: '100px'
};

export const Colors = {
    // Cores principais modernas
    PRIMARY: '#6366F1',
    PRIMARY_DARK: '#4F46E5',
    PRIMARY_LIGHT: '#8B5CF6',

    // Gradientes
    GRADIENT_PRIMARY: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    GRADIENT_SECONDARY: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',

    // Cores neutras modernas
    GRAY_50: '#F9FAFB',
    GRAY_100: '#F3F4F6',
    GRAY_200: '#E5E7EB',
    GRAY_300: '#D1D5DB',
    GRAY_400: '#9CA3AF',
    GRAY_500: '#6B7280',
    GRAY_600: '#4B5563',
    GRAY_700: '#374151',
    GRAY_800: '#1F2937',
    GRAY_900: '#111827',

    // Cores de feedback
    SUCCESS: '#10B981',
    SUCCESS_LIGHT: '#D1FAE5',
    ERROR: '#EF4444',
    ERROR_LIGHT: '#FEE2E2',
    WARNING: '#F59E0B',
    WARNING_LIGHT: '#FEF3C7',
    INFO: '#3B82F6',
    INFO_LIGHT: '#DBEAFE',
    RED_800: '#CC0400',

    // Cores sólidas
    WHITE: '#FFFFFF',
    BLACK: '#000000'
};

export const Shadows = {
    SM: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    ONE: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    TWO: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    THREE: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    GLOW: '0 0 20px rgb(99, 102, 241, 0.15)'
};

// 🆕 TOKENS DE TIPOGRAFIA COMPATÍVEIS
export const FontFamilies = {
    PRIMARY: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

export const FontWeights = {
    LIGHT: 300,
    NORMAL: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
};

export const FontLineHeights = {
    TIGHT: 1.25,
    NORMAL: 1.5,
    RELAXED: 1.75,
};

export const FontSizes = {
    XS: '0.75rem',
    SM: '0.875rem',
    BASE: '1rem',
    LG: '1.125rem',
    XL: '1.25rem',
    '2XL': '1.5rem',
    '3XL': '1.875rem',
    '4XL': '2.25rem',
};

export const FontLetterSpacings = {
    TIGHT: '-0.025em',
    NORMAL: '0',
    WIDE: '0.025em',
};

// Mantenha também a estrutura Typography para compatibilidade
export const Typography = {
    FONT_FAMILY: FontFamilies.PRIMARY,
    FONT_WEIGHT: FontWeights,
    FONT_SIZE: FontSizes,
    LINE_HEIGHT: FontLineHeights,
    LETTER_SPACING: FontLetterSpacings,
};

export const Breakpoints = {
    MOBILE: '320px',
    PHABLET: '480px',
    TABLET: '768px',
    DESKTOP: '1024px',
    WIDE: '1200px'
};

export const Transitions = {
    DEFAULT: 'all 0.2s ease-in-out',
    SMOOTH: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    BOUNCE: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

export default {
    Spaces,
    BorderRadiuses,
    Colors,
    Shadows,
    FontFamilies,
    FontWeights,
    FontLineHeights,
    FontSizes,
    FontLetterSpacings,
    Typography,
    Breakpoints,
    Transitions
};