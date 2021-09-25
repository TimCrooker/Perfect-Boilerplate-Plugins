const base = {
    _app: {
        import: [
            'import { StyledThemeProvider } from "definitions/styled-components"',
						'import "@/styles/global.css"'
        ],
        inner: [],
        wrapper: [["<StyledThemeProvider>", "</StyledThemeProvider>"]],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
