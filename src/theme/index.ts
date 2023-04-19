import { rem } from '@mantine/core';

export const theme = {
  // components
  components: {
    Button: {
      classNames: { root: 'button-root', label: 'button-label' },
    },
  },
  // colors
  /*   colors: {
    brand: [
      '#F0BBDD',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
  },
  primaryColor: 'brand', */
  // fontSizes
  fontSizes: {
    xs: '0.6rem',
    sm: '0.75rem',
    md: '0.9rem',
    lg: '1rem',
    xl: '1.2rem',
  },
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  // headings
  headings: {
    // properties for all headings
    fontWeight: 400,
    fontFamily: 'Roboto',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontWeight: 100, fontSize: '3rem', lineHeight: 1.4 },
      h2: { fontSize: '2.2rem', lineHeight: 1.5 },
      // ...up to h6
      h6: { fontWeight: 900 },
    },
  },
  focusRingStyles: {
    // reset styles are applied to <button /> and <a /> elements
    // in &:focus:not(:focus-visible) selector to mimic
    // default browser behavior for native <button /> and <a /> elements
    resetStyles: () => ({ outline: 'none' }),

    // styles applied to all elements except inputs based on Input component
    // styled are added with &:focus selector
    styles: (theme: any) => ({
      outline: `${rem(2)} solid ${theme.colors.violet[4]}`,
    }),

    // focus styles applied to components that are based on Input
    // styled are added with &:focus selector
    inputStyles: (theme: any) => ({
      outline: `${rem(2)} solid ${theme.colors.violet[4]}`,
    }),
  },
};
