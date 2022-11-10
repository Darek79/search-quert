/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pagePrimary: "#FF651D",
        formBorder: "#D9D9D9",
        buttonSecondary: "#DEDDFF",
        pageGreen: "#37C900",
        dashboardGrey: "#EAECED",
        pageRed: "#FF4949",
        pageWhite: "#FFFFFF",
        pageBlue: "#7772FF",
        boxBg: "#A4A3BC",
        tableOddEven: "#8D8DA3",
        tableEven: "#F7F7F9",
        grey: {
          dark: "#3B3B3B",
          mid: "#7D7D7D",
          light: "#F7F7F7",
          sideboardTitle: "#A0A0A0",
          sideboardItem: "#8D8DA3",
        },
      },
      spacing: {
        formButton: "0.938rem",
        spacing10: "0.625rem",
        spacing20: "1.25rem",
        spacing30: "1.875rem",
        spacing35: "2.188rem",
        spacing38: "2.375rem",
        spacing40: "2.5rem",
        spacing60: "3.75rem",
        spacing70: "4.375rem",
        spacing100: "6.25rem",
        spacing300: "18.75rem",
        switcherHeight: "3.75rem",
        secondaryHeight: "2.5rem",
        inputSwitcherHeight: "80%",
        inputSwitcherWidth: "99%",
        messageW: "41.25rem",
        messageH: "20.5rem",
        agreementW: "62.5rem",
        agreementH: "44.5rem",
        profileInfoW: "41.25rem",
        profileInfoH: "43.31rem",
      },
      maxWidth: {
        profileInfoW: "41.25rem",
        agreementW: "62.5rem",
      },
      gridTemplateColumns: {
        mobile: "1fr",
        tablet: "1fr",
        desktop: "auto minmax(10%,600px) minmax(10%,840px) auto",
      },
      lineHeight: {
        title: "3.25rem",
      },
      backgroundImage: {
        gradientBlue:
          "radial-gradient(100% 100% at 50% 100%, #4e49d5 0%, #7772ff 100%)",
        gradientTop:
          "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0))",
        gradientBottom:
          "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
        gradientOrange:
          "radial-gradient(100% 100% at 50% 0%, #FF8B55 0%, #FF651D 100%), radial-gradient(100% 100% at 50% 100%, #4E49D5 0%, #7772FF 100%);",
      },
      fontSize: {
        size10: "0.625rem",
        size11: "0.688rem",
        size12: "0.75rem",
        size18: "1.125rem",
        size22: "1.375rem",
        size24: "1.5rem",
        size26: "1.625rem",
        size28: "1.75rem",
        size30: "1.875rem",
        size34: "2.125rem",
        size36: "2.25rem",
        size38: "2.375rem",
        size40: "2.5rem",
        size50: "3.125rem",
        size70: "4.375rem",
      },
      boxShadow: {
        settingsEdit: "0px 20px 40px 0px rgba(0, 0, 0, 0.2)",
        homepageShadow: " 0 10px 40px 0 rgba(0, 0, 0, 0.2)",
      },
      opacity: {
        "opacity-15": "0.15",
      },
      borderRadius: {
        default: "1rem",
        "b-15": "0.938rem",
      },
      borderWidth: {
        default: "1px",
      },
    },
  },
};
