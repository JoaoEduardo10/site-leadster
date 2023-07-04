const theme = {
  colors: {
    light_green: '#04D99D',
    light_gray: '#F2F2F2',
    white: '#fff',
    light_blue: '#E6F0FF',
    dark_blue: '#0583F2',
    blue: '#0597F2',
    orange: '#F28705',
  },
  font: {
    sizes: {
      small: '1.6rem',
      extra_small: '3.2rem',
      large: '4.8rem',
      extra_large: '6.4rem',
      big: '8rem',
      extra_big: '9.6rem',
    },
    family: {
      Plus_Jakarta: 'Plus Jakarta Sans',
    },
  },
  media_screen_size: {
    small_phones: '@media (max-width: 480px)',
    phone: '@media (min-width: 481px) and (max-width: 767px)',
    tablet: '@media (min-width: 768px) and (max-width: 1023px)',
    lapTop: '@media (min-width: 1024px) and (max-width: 1500px)',
  },
  padding: {
    small: '1.6rem',
    extra_small: '3.2rem',
    large: '4.8rem',
    extra_large: '6.4rem',
    big: '8rem',
    extra_big: '9.6rem',
  },
} as const;

export { theme };
