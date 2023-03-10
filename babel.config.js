module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel",
      ["module:react-native-dotenv"],
      ['module-resolver',
        {
          root: ['./scr'],
          alias: {
            assets: './assets',
            components: './src/components',
            contexts: './src/contexts',
            hooks: './src/hooks',
            screens: './src/screens',
            navigation: './src/navigation',
            services: './src/services',
            theme: './src/theme',
            commons: './src/commons',
            constants: './src/commons/constants',
          }
        }]],
  };
};
