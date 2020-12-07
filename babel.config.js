module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  //antd按需加载配置
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }
    ]
  ]
}
