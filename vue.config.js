module.exports = {
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        "@primary-color": "#52c41a",
                        
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
}
