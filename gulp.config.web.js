const baseName = '';

module.exports = {
    app: { name: baseName },
    css: {
        sourcePaths: [
            `./src/scss/${baseName}/**/*.scss`
        ],
        exportPath: `./dist/${baseName}/css/`
    },
    media: {
        sourcePaths: [
            `./src/img/${baseName}/**/*.{jpg,png,svg,json}`
        ],
        exportPath: `./dist/${baseName}/img/`
    },
    js: {
        sourcePaths: [
            `./src/js/${baseName}/**/*.js`,
            `!./src/js/parts/**/*.js`
        ],
        exportPath: `./dist/${baseName}/js/`
    },
};