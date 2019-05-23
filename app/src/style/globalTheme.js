import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { css } from 'styled-components'

export const theme = deepMerge(grommet, {
  global: {
    colors: {
      background: '#ffffff',
      brand: '#8C50FF',
      control: {
        dark: '#8C69FF',
        light: '#8C50FF',
      },
      focus: '#99d5ef',
      'neutral-1': '#5d0cfb',
      'neutral-2': '#7026ff',
      'neutral-3': '#767676',
      'accent-1': '#c3a4fe',
      'accent-2': '#a577ff',
      'status-critical': '#FF856B',
      'status-warning': '#FFB86B',
      'status-ok': '#4EB976',
      'status-unknown': '#a8a8a8',
      'status-disabled': '#a8a8a8',
      'dark-1': '#000001',
      'dark-2': '#333333',
      'dark-3': '#444444',
      'dark-4': '#555555',
      'dark-6': '#666666',
      'light-1': '#f5f5f5',
      'light-2': '#f5f5f5',
      active: "light-5",
      placeholder: "dark-1",
      text: {
        light: 'rgba(0, 0, 0, 0.87)',
        dark: 'rgba(f,f,f,0.9)'
      }
    },
    control: {
      border: {
        width: '1px',
        radius: '0px',
        color: 'border',
      },
    },
    anchor: {
      color: 'control',
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
    extend: css`
        ${props => !props.plain && `
          font-weight: 600;
          border-radius: 5px;
          padding: 6px 22px;
        `}
        ${props => props.dark &&`
          color: white;
        `}
      `,
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