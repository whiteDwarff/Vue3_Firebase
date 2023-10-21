// API를 통하여 외부에서 데이터를 읽거나 쓰거나 할때 처리할 파일
const categories = [
  {label: 'Q&A', value: 'qna'},
  {label: '커뮤니티', value: 'community'},
  {label: '공지사항', value: 'notice'},
  {label: '강의', value: 'lecture'},
]

export function getCategories() {
  return categories;
}