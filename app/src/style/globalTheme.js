import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";

export const theme = deepMerge(grommet, {
  global: {
    colors: {
      'light-2': '#f5f5f5',
      active: "light-5",
      placeholder: "dark-1",
      text: {
        light: 'rgba(0, 0, 0, 0.87)',
        dark: 'rgba(f,f,f,0.9)'
      }
    },
    edgeSize: {
      small: '14px',
    },
    elevation: {
      light: {
        small: "0 0 1px 0 rgba(0, 0, 0, 0.40), 0 1px 2px 0 rgba(0,0,0,0.40)",
        medium: "0 0 2px 0 rgba(0,0,0,0.40), 0 2px 4px 0 rgba(0,0,0,0.40)",
        large: "0 0 1px 0 rgba(0,0,0,0.40), 0 4px 8px 0 rgba(0,0,0,0.40)",
        xlarge: "0 0 1px 0 rgba(0,0,0,0.40), 0 8px 16px 0 rgba(0,0,0,0.40)"
      }
    },
    font: {
      size: "16px",
      height: "20px"
    },
    input: {
      weight: 100
    },
    size: {
      avatar: "36px",
      sidebar: "60px"
    }
  },
  icon: {
    size: {
      medium: "18px"
    }
  },
  paragraph: {
    medium: {
      size: "16px",
      height: "20px"
    },
    large: {
      size: "20px",
      height: "24px"
    }
  },
  button: {
    color: {
      light: 'rgba(f,f,f,0.9)',
      dark: 'rgba(0, 0, 0, 0.87)'
    },
    border: {
      width: '1px',
      radius: '4px',
    },
    padding: {
      vertical: '8px',
      horizontal: '16px',
    }
  }
});