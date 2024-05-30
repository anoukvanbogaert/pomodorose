import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const myCustomLightTheme = {
    dark: false,
    colors: {
        primary: '#FF66BA', // pink
        secondary: '#F4AFD5', // light pink
        accent: '#66BAFF', // blue
        shadow: '#000032', // black-blue
    },
};

export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        options: { customProperties: true },
        themes: {
            myCustomLightTheme,
        },
    },
    typography: {
        font: {
            family: 'Roboto',
        },
        h1: {
            fontSize: '6rem',
            fontWeight: '500',
            color: 'var(--v-primary-base)',
        },
        h2: {
            fontSize: '3rem',
            fontWeight: '400',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: '300',
            color: 'var(--v-primary-base)',
        },
    },
});
