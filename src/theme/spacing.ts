export const lineHeights = {
  title: '28px',
  copy: '20px',
};

export const space = [0, 4, 8, 16, 32, 64, 128];
export const spacepx = space.map(x => x + 'px');

export type Space = typeof space;
export type LineHeights = typeof lineHeights;
