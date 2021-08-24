# 初期設定

## express-generatorを利用した環境構築
### 初期化
https://www.npmjs.com/package/express-generator-typescript  

- インストール
```
npm install -g express-generator  
```

- PJ作成
```
express -e server-app  
```
### TS導入
https://qiita.com/jumperson/items/e546137f6305ea98a673  
  
- インストール
```
npm i typescript @types/express @types/node @types/debug --save-dev 
```

- tsconfig.json作成
```
./node_modules/.bin/tsc --init
```

- 既存ファイルの書き換え
```
./routes/users.js => ./routes/users.ts
./app.js -> ./app.ts
./bin/www -> ./bin/www.ts
```

- 作業用ディレクトリを作成
```
mkdir src
```
  
- トランスパイル後のファイルを出力するディレクトリを作成
```
mkdir dist
```
  
- tsconfig.jsonの修正
```
"outDir": "./dist", 
"scripts": {
  "start": "npm run build && node ./dist/bin/www.js",
  "build": "tsc"
},
 ```
  
### ホットリロード
- インストール
```
npm i ts-node nodemon --save-dev
```

- nodemon.jsonの作成
```
touch nodemon.json
```
```
{
    "watch": ["src"],
    "ext": "ts",
    "exec": "ts-node ./src/bin/www.ts"
}
```
- tsconfig.jsonの修正
```
"outDir": "./dist", 
"scripts": {
  "start": "npm run build && node ./dist/bin/www.js",
  "start:dev": "nodemon",
  "build": "tsc"
},
 ```

## イチから作る場合は以下
  
### node初期化
```
npm init
```

### express導入
- インストール
```
npm i express --save
```

- index.js作成

- package.jsonにdev実行コマンドを追加
```
"scripts" {
 "dev": "node src/index.js"
}
```

- 起動確認
```
docker-compose up -d
or
docker-compose up --build web
```

### TS導入
- インストール
```
npm i --save-dev typescript @types/express @types/node
```

- dist作成
```
mkdir dist
```

- tsconfig.json作成
```
touch tsconfig.json
```
```
{
    "compilerOptions": {
        "outDir": "./dist",
        "sourceMap": true,
        "module": "commonjs",
        "target": "es5",
        "moduleResolution": "node",
        "removeComments": true
    },
    "include": [
        "./src/**/*"
    ]
}
```
` "module": "es6" ` とすると後々エラーとなるので、`"module": "commonjs"`としておく。

- package.json修正
```
"scripts": {
  "dev": "node dist/index.js",
  "tsc": "tsc"
}
```

### tsnode追加
- インストール
```
npm i ts-node --save-dev
```

- package.json修正
```
"scripts": {
  "start": "node dist/index.js",    // 本番実行用のコマンド。これの前にtscも走らせること。
  "dev": "ts-node ./src/index.ts",  // 開発環境用のコマンド。
  "ts-node": "ts-node"
}
```

### 自動リロード用nodemon追加
- インストール
```
npm i nodemon --save-dev
```

- nodemon.json追加
```
touch nodemon.json
```
```
{
  "watch": ["src"],
  "ext": "ts",
  // テストファイル等、リロード対象にしたくない物があればここに追加
  "ignore": ["tests/**/*.ts"],
  // 実際に実行するコマンド。先程のts-nodeのコマンドです。
  "exec": "npm run ts-node ./src/index.ts"
}
```

- package.json修正
```
"scripts": {
  "dev": "nodemon -L"
}
```
## mysql追加
```
npm i mysql --save
```
※` mysql8.0 `だと接続時の認証方式が` caching_sha2_password `の場合にエラーとなるので、` mysql2 `を使うほうがよい
```
npm i mysql2 --save
```
https://github.com/sidorares/node-mysql2  
https://www.chuken-engineer.com/entry/2020/09/04/074216  



# 参考
https://qiita.com/techneconn/items/012bdf1b9ff3881546b3  
https://qiita.com/ozoneboy/items/e530c59277c1f4ae0b7e  
https://stackoverflow.com/questions/63445821/ts-node-execute-typescript-with-module-import-and-module-defined
