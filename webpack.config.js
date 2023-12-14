
const withTm = require('next-transpile-modules')([
    "three",
    "react-three-fiber",
    "drie",
]);

module.exports = withTm({
    webpack(config,option){
        config.module.rules.push({
            test:/\.(glb|gltf)$/,
            use:{
                loader:"file-loader",
            },
        });
        
        return config;
    },
});
