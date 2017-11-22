/**
 * Created by hll on 2017/10/10.
 */

var htmlwp=require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',  //ָ�����������ļ�
    output:{        //�Ѵ���ļ����õ�ʲôλ��ȥ
        path:__dirname+'/dist',
        filename:'build.js'
    },
    module:{
        loaders:[{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(png|jpg|gif|ttf)$/,
                loader:'url-loader?limit=20000'
            },
            //{
            //    test:/\.js$/,
            //    loader:'babel-loader',
            //    exclude:/node_modules/
            //},
            {
                test:/.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    //babel:{
    //    presets:['es2015'],
    //    plugins:['transform-runtime']
    //},

    plugins:[
        new htmlwp({
            title:'',
            filename:'index.html',
            template:'index1.html'
        })
    ]
}


