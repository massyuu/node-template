# 初期設定

## express-generatorを利用した環境構築
### 初期化
  
- 初期位置  
```
cd node_template
```
  
- インストール  
```
npm install -g express-generator  
```

- PJ作成  
```
express -e server-app  
```
  
### TS導入
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
 ```

- package.jsonの修正
```
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
- package.jsonの修正
```
"scripts": {
  "start": "npm run build && node ./dist/bin/www.js",
  "start:dev": "nodemon",
  "build": "tsc"
},
 ```
- 起動確認
```
docker-compose up -d
or
docker-compose up --build web
```

# 参考
https://qiita.com/jumperson/items/e546137f6305ea98a673  
https://qiita.com/techneconn/items/012bdf1b9ff3881546b3  
