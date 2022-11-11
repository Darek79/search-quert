/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                pageMain: '#202124',
                bgInput: '#303134',
                test: '#bdc1c6',
            },
            spacing: {
                formButton: '0.938rem',
                spacing10: '0.625rem',
                spacing20: '1.25rem',
                spacing30: '1.875rem',
                spacing35: '2.188rem',
                spacing38: '2.375rem',
                spacing40: '2.5rem',
                spacing60: '3.75rem',
                spacing70: '4.375rem',
                spacing100: '6.25rem',
                spacing300: '18.75rem',
                switcherHeight: '3.75rem',
                secondaryHeight: '2.5rem',
                inputSwitcherHeight: '80%',
                inputSwitcherWidth: '99%',
                messageW: '41.25rem',
                messageH: '20.5rem',
                agreementW: '62.5rem',
                agreementH: '44.5rem',
                profileInfoW: '41.25rem',
                profileInfoH: '43.31rem',
            },
            fontSize: {
                size10: '0.625rem',
                size11: '0.688rem',
                size12: '0.75rem',
                size18: '1.125rem',
                size22: '1.375rem',
                size24: '1.5rem',
                size26: '1.625rem',
                size28: '1.75rem',
                size30: '1.875rem',
                size34: '2.125rem',
                size36: '2.25rem',
                size38: '2.375rem',
                size40: '2.5rem',
                size50: '3.125rem',
                size70: '4.375rem',
            },
            opacity: {
                'opacity-15': '0.15',
            },
            borderRadius: {
                default: '1rem',
            },
            borderWidth: {
                default: '1px',
            },
        },
    },
};
