import {css} from 'styled-components'

export const v1 = {
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
      },
      control: {
        border: {
          width: '1px',
          radius: '0px',
          color: 'border',
        },
      },
    },
    anchor: {
      color: 'control',
    },
    button: {
      extend: css`
        ${props => !props.plain && `
          font-weight: 600;
          border-radius: 5px;
          padding: 6px 22px;
        `}
      `,
    },
  }