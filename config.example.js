// config.example.js → 복사해서 config.js 로 저장하고 키를 넣으세요.
// (config.js 는 .gitignore 됨 — 키 노출 방지)
//
// 텐센트 위치서비스(lbs.qq.com) 웹서비스 키. 있으면 퀵버튼 검색이 고품질(POI 정확)로 동작.
// ⚠️ 텐센트 콘솔에서 이 키의 referer 화이트리스트에 반드시 추가:  pages.oss.navercorp.com
//    (안 그러면 status 110 "来源域名未被授权" 로 거부됨)
// 키가 없거나 비어 있으면 → OSM(키 불필요) 폴백 + 고덕 링크로 자동 동작.
window.TENCENT_KEY = "";
