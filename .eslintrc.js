/**
 * 此文件禁止私自修改
 */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true,
  },
  plugins: ['react'],
  globals: {
    __DEV__: true,
    __PROD__: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  /**
   *  "off" 或 0 - 关闭规则
   *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    // 定义对象的set存取器属性时，强制定义get
    'accessor-pairs': 2,
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 0,
    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    camelcase: 0,
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式不带逗号，单行模式不能带逗号
    'comma-dangle': [2, 'always-multiline'],
    // 控制逗号前后的空格
    'comma-spacing': [2, { before: false, after: true }],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    'comma-style': [2, 'last'],
    complexity: 0,
    'computed-property-spacing': 0,
    'consistent-return': 0,
    'consistent-this': 0,
    // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'constructor-super': 2,
    curly: [0, 'multi-line'],
    'default-case': 0,
    // 强制object.key 中 . 的位置，参数:
    //      property，'.'号应与属性在同一行
    //      object, '.' 号应与对象名在同一行
    'dot-location': [2, 'property'],
    'dot-notation': 0,
    // 文件末尾强制换行
    'eol-last': 2,
    eqeqeq: 0,
    'func-names': 0,
    'func-style': 0,
    'generator-star-spacing': [2, { before: true, after: true }],
    'guard-for-in': 0,
    'handle-callback-err': [2, '^(err|error)$'],
    // 强制使用一致的缩进规则，使用2个空格进行缩进控制
    /*indent: [
      "error",
      "tab"
    ],*/
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'linebreak-style': 0,
    'lines-around-comment': 0,
    'max-nested-callbacks': 0,
    'new-cap': [2, { newIsCap: true, capIsNew: false }],
    'new-parens': 2,
    'newline-after-var': 0,
    'no-alert': 0,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 0,
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': 2,
    'no-console': 0,
    'no-constant-condition': 0,
    'no-continue': 0,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 0,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止重复的 case 标签
    'no-duplicate-case': 2,
    'no-else-return': 0,
    // 禁止空语句块
    'no-empty': 2,
    'no-empty-character-class': 2,
    //  禁用标签语句
    'no-labels': 2,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    // 禁止不必要的分号
    'no-extra-semi': 2,
    // 禁止 case 语句落空
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inline-comments': 0,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 0,
    'no-loop-func': 0,
    'no-mixed-requires': 0,
    // 不允许空格和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 2,
    // 禁止使用多个空格
    'no-multi-spaces': 2,
    // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
    'no-multi-str': 2,
    // 不允许多个空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
        maxEOF: 1,
      },
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 0,
    'no-new': 2,
    'no-new-func': 0,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 0,
    'no-path-concat': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-proto': 0,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-modules': 0,
    // 禁用指定的通过 require 加载的模块
    'no-return-assign': 0,
    'no-script-url': 0,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 0,
    'no-ternary': 0,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    // 禁用行尾空格
    'no-trailing-spaces': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 2,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 0,
    // 禁止出现未使用过的变量
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
        // 忽略rest的兄弟属性
        ignoreRestSiblings: true,
        // 忽略下划线开头的变量
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': 0,
    'no-var': 0,
    'no-void': 0,
    'no-warning-comments': 0,
    'no-with': 2,
    'object-curly-spacing': 0,
    'object-shorthand': 0,
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': [2, { initialized: 'never' }],
    'operator-assignment': 0,
    // 强制操作符使用一致的换行符
    'operator-linebreak': [2, 'after'],
    'padded-blocks': 0,
    'prefer-const': 0,
    'quote-props': 0,
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [2, 'single', 'avoid-escape'],
    radix: 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    semi: [2, 'always'],
    'semi-spacing': 0,
    'sort-vars': 0,
    // 强制在关键字前后使用一致的空格 (前后腰需要)
    'keyword-spacing': 2,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': 0,
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [2, { words: true, nonwords: false }],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
        ],
      },
    ],
    strict: 0,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'vars-on-top': 0,
    'wrap-iife': [2, 'any'],
    'wrap-regex': 0,
    yoda: [2, 'never'],

    //////////////
    // ES6.相关 //
    //////////////
    // 要求箭头函数体使用大括号
    'arrow-body-style': 2,
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': 2,
    // 箭头函数符号前后空格要求
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    // 禁止修改类声明的变量
    'no-class-assign': 2,
    // 禁止修改 const 声明的变量
    'no-const-assign': 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
  },
};
