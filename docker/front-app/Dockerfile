# Dockerfile template
# WebAppのベースイメージ。バージョンは都度確認が必要。
FROM node:13.8.0-alpine3.11

# 作業ディレクトリの指定
ENV APP_ROOT /front-app
WORKDIR $APP_ROOT

# package.jsonとpackage-lock.jsonを先にコピー。
# package*.jsonだけを先に個別コピーすることで、パッケージ変更時は`RUN npm install`が走るが
# それ以外のファイル変更時は同コマンドにはキャッシュ利用で飛ばされるため、ビルド時間を短縮できる。
COPY ../../front-app/package*.json $APP_ROOT
RUN npm install

# その他ファイルをコピー。
COPY ../../front-app/ $APP_ROOT
