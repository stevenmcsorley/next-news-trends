import { tailwind } from '@theme-ui/presets'

const theme = {
  ...tailwind,
  colors:{
...tailwind.colors,
  },
  links: {
    color: 'rgba(0,0,0,0.24)',
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'none',
      '&:hover': {
        bg: 'dark',
      },
    }
  },
  text: {
    default: {
      color: 'inherit',
      fontSize: 3,
    }
  },
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    }
  },
  styles: {
    ...tailwind.styles
  }
}

export default theme