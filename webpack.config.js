const path=require("path");
const webpack=require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const CopyWebpackPlugin=require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports={
    entry:"./app.js",
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:'app.js',
    },
    devServer:{
        port:4001,
        open:true,
        contentBase:'./dist',
        hot:true,
    },
    optimization:{

    },
    module:{
        rules:[
             {
                 test:/\.vue$/,
                 use:'vue-loader',
             },
            {
            test:/\.js(x)?$/,
            use:{
               loader:'babel-loader',
               options:{
                plugins:[
                    "transform-vue-jsx",
                ],
                  presets:[
                      "@babel/preset-env"]
            }
            }
        }]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,"./public/index.html"),
            filename:'./index.html'
        }),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([{
            patterns:[{from:'./dist'}]
            
        }])
    ]
}