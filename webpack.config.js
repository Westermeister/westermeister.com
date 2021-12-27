const fs = require("fs");
const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");

const SCRIPTS_SRC = "./src/frontend/assets/scripts";

module.exports = {
  mode: "production",
  entry: { "home/CardList": `${SCRIPTS_SRC}/home/CardList.ts` },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new TerserPlugin({
      /**
       * This is an ugly hack to prepend entry files' copyright notices to their corresponding output files.
       * The most straightforward way would be to take the ".LICENSE.txt" files which Webpack generates, and copy their
       * content as banners for the corresponding output files.
       *
       * The problem is that they're only generated AFTER the "banner" function (making them useless).
       * This means that we can't actually access those files when we're trying to generate the banner. To get around
       * this, we set the filenames of the ".LICENSE.txt" files to actually just be the source filenames. This is done
       * in the "filename" function.
       *
       * Then, in the "banner" function, we're given each filename as the "commentsFile" parameter. We search for the
       * filename in the source directory, get the source file's content, and then search it for its copyright notice.
       * Once we have the notice, we do a little preprocessing and return it, and Webpack makes it the banner.
       *
       * Finally, do note that the aforementioned ".LICENSE.txt" files still make it to the dist directory, but just as
       * the same names of their source files. These are basically dummy files and they shouldn't matter all that much.
       */
      extractComments: {
        condition: /^\**!/,
        filename: (fileData) => fileData.filename.split(".")[0] + ".ts",
        banner: (commentsFile) => {
          const sourceFile = fs
            .readFileSync(SCRIPTS_SRC + "/" + commentsFile)
            .toString();
          const lines = sourceFile.split("\n");
          let copyright = "ERROR: No copyright notice found!";
          for (const line of lines) {
            if (line.startsWith(" * Copyright")) {
              copyright = line.slice(3);
              break;
            }
          }
          return copyright;
        },
      },
    }),
  ],
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  output: {
    path: path.resolve(__dirname, "dist", "frontend", "assets", "scripts"),
    filename: "[name].js",
  },
  externals: { vue: "Vue" },
};
