# 使い方
```
npx create-next-app project-name --example https://github.com/Shinchan-git/template-next-radix-emotion
```

# 設定内容
- Next.js 13
```
npx create-next-app project-name --typescript
```

- Emotion
```
npm install @emotion/react @emotion/styled
```
```
//tsconfig.json
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react"
  }
}
```

- Storybook
```
npx storybook init
```
```
//package.json
Storybookを立ち上げる時にグローバルスタイルを読み込めるように-sでディレクトリを指定
"scripts": {
  "storybook": "start-storybook -p 6006 -s ./src"
}
```
```
cd .storybook
touch preview-head.html
```
```
//.storybook/preview-head.html
<link rel="stylesheet" href="styles/global.css" />
```
```
//.storybook/main.js
module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  babel: async (options) => {
    // emotion用の注入設定
    // preset-react ローダーを取得してくる
    const presetReact = options.presets.find((p) => /preset-react/.test(p[0]))
    // preset-reactローダのオプションを設定
    presetReact[1] = {
      ...presetReact[1],
      runtime: 'automatic',
      importSource: '@emotion/react'
    }
    // Emotionプラグインを追加
    options.plugins.push(require.resolve('@emotion/babel-plugin'))

    return options;
  }
}
```

- /components  
Layout  
Footer  
Accordion  
Spacer  
Divider  
ArrowIcon  

- Radix UI
@radix-ui/react-accordion