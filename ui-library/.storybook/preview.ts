import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff'
        },
        {
          name: 'dark',
          value: '#1a202c'
        },
        {
          name: 'gray',
          value: '#f7fafc'
        }
      ]
    },
    options: {
      storySort: {
        order: [
          'Home',
          'Badge',
          'Button',
          'Header',
          'Input',
          'Modal',
          'MultiSelect',
          'Page',
          'Pagination',
          'ProductCard',
          'Radio',
          'SearchBar',
          'Select',
          'Spinner',
          'Textarea',
          'Toaster'
        ],
        method: 'alphabetical'
      }
    }
  }
};

export default preview;
