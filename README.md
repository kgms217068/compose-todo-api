# 🐳 Docker Compose Todo API

간단한 Todo 목록을 관리할 수 있는 Node.js + MongoDB 기반의 REST API 프로젝트입니다.  
Docker Compose를 활용하여 백엔드 서버와 데이터베이스를 컨테이너로 구성했습니다.

## 🧰 사용 기술

- Node.js + Express
- MongoDB (Mongoose)
- Docker / Docker Compose
- VS Code REST Client

## 📁 프로젝트 구조
compose-todo-app/
├── backend/                 ← Node.js 서버
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── node_modules
├── docker-compose.yml       ← 전체 서비스 관리
├── requests.http            ← API 테스트 파일 (VS Code용)
└── README.md 