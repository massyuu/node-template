# Docker環境構築テンプレート
Dockerの環境を作るに当たって、その都度Dockerfile、docker-compose.ymlを作るのも面倒になったので、ある程度テンプレ化しておく。  
フロントのWebAppを想定しているので、作成するコンテナは以下。  
- フロントアプリケーション：front-app  
- サーバーアプリケーション：server-app  
- Database：db  

