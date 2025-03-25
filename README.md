# 🐳 Docker Compose Todo API

간단한 Todo 목록을 관리할 수 있는 Node.js + MongoDB 기반의 REST API 프로젝트입니다.  
Docker Compose를 활용하여 백엔드 서버와 데이터베이스를 컨테이너로 구성했습니다.

## 🧰 사용 기술

- Node.js + Express
- MongoDB (Mongoose)
- Docker / Docker Compose
- VS Code REST Client

## 📁 프로젝트 구조
![프로젝트구조](./image/프로젝트%20구조.png)


## 🚀 실행 방법

### 1. 도커 실행
```bash
docker-compose up --build

2. API테스트
VS Code에 REST Client 확장을 설치하고, requests.http 파일을 열어 요청을 보냅니다.

예시 [POST]

POST http://localhost:3000/todos
Content-Type: application/json

{
  "text": "오늘의 할일입니다."
}

✅ 주요 기능
GET /todos : 전체 할 일 목록 조회
POST /todos : 새 할 일 추가
PUT /todos/:id : 특정 할 일 수정
DELETE /todos/:id : 특정 할 일 삭제

3. 실행사진
![예시사진1(PUT)](./image/예시사진1(PUT).png)
![예시사진2(DELETE)](./image/예시사진2(DELETE).png)