module.exports = {
    content: [
        "./src/**/*.{html,js,ts,vue}", // Add the paths to your components
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        "grid-cols-1",
        "grid-cols-2",
        "grid-cols-3",
        "grid-cols-4",
        "grid-cols-5",
        "sm:grid-cols-1",
        "sm:grid-cols-2",
        "sm:grid-cols-3",
        "sm:grid-cols-4",
        "md:grid-cols-1",
        "md:grid-cols-2",
        "md:grid-cols-3",
        "md:grid-cols-4",
        "lg:grid-cols-1",
        "lg:grid-cols-2",
        "lg:grid-cols-3",
        "lg:grid-cols-4",
    ],
};
