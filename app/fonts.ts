import localFont from "next/font/local";

export const aeonikFont = localFont({
    src: [
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Air.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Airitalic.ttf",
            weight: "100",
            style: "italic",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Thin.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Thinitalic.ttf",
            weight: "200",
            style: "italic",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Lightitalic.ttf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Regularitalic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Mediumitalic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Bolditalic.ttf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "../public/assets/fonts/Aeonik/Aeonik-Blackitalic.ttf",
            weight: "900",
            style: "italic",
        }
    ],
    display: 'swap',
    variable: '--font-aeonik',
});