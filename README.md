>[!WARNING]
>This is not fully coded yet, more things need to be added soon

# How to run on your local machine?


1. Clone this repository into your directory 
``` 
git clone https://github.com/krekz/photograph-ts.git
```
2. Then, in your terminal 
```
cd photograph-ts
npm install
```


 >[!IMPORTANT]
> You have to register your own [Pexels API key](https://www.pexels.com/api/) **BEFORE PROCEED TO STEP 3**
3. Create *.env* file into your directory
```
touch .env
 ```
4. Paste your API key afer *'='* and don't forget to *remove the bracket* 
```
VITE_PEXELS_API={YOUR KEY}
```


5. proceed with in the terminal
 ```
npm run dev
``` 

6. in your URL type `localhost:5173` and you're done :grin: 

## ESLint configuration

1. Create *.eslintrc.cjs*

   ```
   touch .eslintrc.cjs
   ```
2. Copy this to eslint file
   ```cjs
   module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
   }
  
3. Done


