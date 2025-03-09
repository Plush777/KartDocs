export default function getCookieValue(name) {
  // 모든 쿠키 문자열을 '; '로 분리
  const cookies = document.cookie.split("; ");

  // 쿠키 배열을 순회하면서 원하는 쿠키를 찾음
  for (let cookie of cookies) {
    // 쿠키는 'name=value' 형식이므로 '='를 기준으로 분리
    const [cookieName, cookieValue] = cookie.split("=");

    // 원하는 쿠키 이름과 일치하는지 확인
    if (cookieName === name) {
      return cookieValue; // 값 반환
    }
  }

  return null; // 쿠키가 없으면 null 반환
}
