// plugins/domain.js (서버 환경에서만 실행)
export default function ({ req, app }, inject) {
    if (process.server) {
        const domain = req.headers.host;
        // 또는 process.env.HOST 와 같이 환경 변수 사용
        app.domain = domain;
        console.log("Server domain:", domain); // 서버 로그에 출력
    }
}