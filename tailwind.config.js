const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            "bp620": "620px",
            "sm": "640px",
            "bp680": "680px",
            "md": "768px",
            "bp830": "830px",
            "bp960" : "960px",
            "lg": "1024px",
            "bp1070": "1070px",
            "xl": "1280px",
            "bp1390" : "1390px",
            "2xl": "1536px"
        },
        extend: {
            boxShadow: {
                main: "0 4px 8px 0 rgba(0,0,0,0.04), 0 0 2px 0 rgba(0,0,0,0.06), 0 0 1px 0 rgba(0,0,0,0.04)"
            }
        },
        fontSize: {
            "large-title": ["32px", "38px"],
            "title-1": ["28px", "32px"],
            "title-2": ["24px", "28px"],
            "title-3": ["20px", "24px"],
            "title-4": ["18px", "22px"],
            large: ["17px", "24px"],
            "medium-16": ["16px", "24px"],
            medium: ["15px", "22px"],
            "small-14": ["14px", "20px"],
            small: ["13px", "18px"]
        },
        colors: {
            white: colors.white,
            transparent: colors.transparent,
            "modal-overlay": "#0000007c",
            primary: {
                DEFAULT: "#F26333",
                shade: {
                    10: "#D94310",
                    20: "#B12E02",
                    30: "#912400"
                },
                tint: {
                    10: "#F47A51",
                    20: "#FFA080",
                    30: "#FFC9B8",
                    40: "#FFEBE4"
                }
            },
            mono: {
                ink: {
                    DEFAULT: "#040C22",
                    light: "#363D4E",
                    lighter: "#5C616F",
                    lightest: "#A7AAB2"
                },
                sky: {
                    DEFAULT: "#CDD4DB",
                    light: "#DEE3E7",
                    lighter: "#E8EBEE",
                    lightest: "#F6F7F8"
                }
            },
            accent: {
                cyan: {
                    DEFAULT: "#0BB8E4",
                    shade: {
                        10: "#0093B9",
                        20: "#006F8B",
                        30: "#005267"
                    },
                    tint: {
                        10: "#44C8E9",
                        20: "#87DDF3",
                        30: "#CAF4FF",
                        40: "#E5F9FE"
                    }
                },
                green: {
                    DEFAULT: "#00B167",
                    shade: {
                        10: "#008859",
                        20: "#006240",
                        30: "#00482F"
                    },
                    tint: {
                        10: "#26BD7E",
                        20: "#4DC895",
                        30: "#A6EDCF",
                        40: "#D9F3E8"
                    }
                },
                redd: {
                    DEFAULT: "#F55053",
                    shade: {
                        10: "#DE3A3D",
                        20: "#C62B2E",
                        30: "#A0070A"
                    },
                    tint: {
                        10: "#F26669",
                        20: "#FF8C8E",
                        30: "#F7B4B5",
                        40: "#FEE5E5"
                    }
                }
            }
        }
    },
    plugins: []
};
