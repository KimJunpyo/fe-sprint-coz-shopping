module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            boxShadow: {
                "headerShadow": "0px 8px 8px rgba(0, 0, 0, 0.1);",
                "burgerShadow": "0px 0px 8px rgba(0, 0, 0, 0.1);",
                "productCardShadow": "0px 0px 36px rgba(0, 0, 0, 0.5);",
            },
            borderWidth: {
                "1": "1px",
            },
            colors: {
                "grey-888": "#888888",
                "blue-purple": "#452CDD",
            },
            keyframes: {
                "toast-in-right": {
                    "from": { transform: "translateX(100%)" },
                    "to": { transform: "translateX(0)" },
                },
                "fade-out": {
                    "0%": { opacity: 100, transform: "translateX(0)" },
                    "100%": { opacity:0, transform: "translateX(100%)"},
                }
            },
            animation: {
                "toast-in-right": "toast-in-right 1s",
                "fade-out": "fade-out 1s"
            }
        },
    },
    plugins: [],
}