
type FontPropsType = {
  family?: string
  weight?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
  letterSpacing?: string
}

export const font = ({
                       weight = 400,
                       color = 'inherit',
                       Fmin = 14,
                       Fmax = 24,
                       lineHeight = 1.2,
                       letterSpacing = 'normal'
                     }: FontPropsType = {}) => `
  font-weight: ${weight};
  color: ${color};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  font-size: clamp(${Fmin}px, calc(${Fmin}px + (${Fmax} - ${Fmin}) * ((100vw - 320px) / (1280 - 320))), ${Fmax}px);
`;