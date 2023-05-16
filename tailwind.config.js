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
            }
        },
    },
    plugins: [],
}