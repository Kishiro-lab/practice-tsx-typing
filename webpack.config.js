const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = "production";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/main.tsx",
  // ファイルの出力設定
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/docs`,
    // 出力ファイル名
    filename: "main.js",
    // assetの出力ファイル名
    // defaultName: "images/[hash][ext][query]"
    // name:ファイル名 hash:ハッシュ値 ext:拡張子 query:クエリ文字列
    assetModuleFilename: "images/[name][ext]",
  },
  devServer: {
    static: {
      directory: `${__dirname}/docs`,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        // ローダー名
        use: [
          // CSSファイルを書き出すオプションを有効にする
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドを取り込む
              url: true,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          // Sassをバンドルするための機能
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 閾値以上だったら埋め込まず任意ファイル名で分離
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 閾値の調整(8KB)
            maxSize: 8 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    // CSSファイルを外だしにするプラグイン
    new MiniCssExtractPlugin({
      // ファイル名を設定します
      filename: "style.css",
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  target: ["web", "es5"],
};
