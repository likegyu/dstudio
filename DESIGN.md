# dstudio 웹사이트 디자인 시스템

## 1. 색상 팔레트

### Primary Colors (웹사이트 기본)
| 용도 | 색상명 | HEX | 설명 |
|------|--------|-----|------|
| Primary | Warm Brown | `#8B7355` | 브랜드 메인 컬러, 따뜻한 갈색 |
| Primary Light | Soft Tan | `#B8A590` | Primary의 밝은 변형 |
| Primary Dark | Deep Brown | `#5C4A35` | Primary의 어두운 변형 |

### Brand Accent (to dot 앱 연계)
| 용도 | 색상명 | HEX | 설명 |
|------|--------|-----|------|
| Brand Green | to dot Green | `#2F8552` | 앱 브랜드 액센트, Products 섹션에서 활용 |
| Brand Green Light | to dot Green Light | `#52B970` | 히트맵 강조, 밝은 변형 |

### Secondary Colors
| 용도 | 색상명 | HEX | 설명 |
|------|--------|-----|------|
| Secondary | Sage Green | `#A8B5A0` | 자연스럽고 편안한 녹색 |
| Secondary Light | Mint Cream | `#C8D4C2` | 부드러운 민트 |
| Secondary Dark | Forest Sage | `#7A8A72` | 짙은 세이지 |

### Accent Colors
| 용도 | 색상명 | HEX | 설명 |
|------|--------|-----|------|
| Accent | Warm Coral | `#D4967A` | 포인트 컬러, 따뜻한 코랄 |
| Accent Soft | Peach | `#E8C4B0` | 부드러운 피치톤 |

### Background Colors
| 용도 | 색상명 | HEX | 설명 |
|------|--------|-----|------|
| Background | Cream White | `#FAF7F2` | 메인 배경, 따뜻한 크림색 |
| Background Alt | Warm Beige | `#F0EBE3` | 섹션 교차 배경 |
| Surface | Soft Linen | `#F5F1EB` | 카드/컨테이너 배경 |

### Text Colors
| 용도 | 색상명 | HEX | 설명 |
|------|--------|-----|------|
| Text Primary | Charcoal | `#3D3429` | 본문 텍스트 |
| Text Secondary | Warm Gray | `#7A7067` | 보조 텍스트 |
| Text Muted | Light Warm Gray | `#A69E95` | 캡션, 힌트 텍스트 |
| Text On Dark | Off White | `#F5F0E8` | 어두운 배경 위 텍스트 |

### to dot 앱 색상 시스템 (Products 섹션 히트맵 데모용)
앱 내 12가지 습관 히트맵 색상을 Products 섹션의 히트맵 시각 요소에 활용합니다.

| 이름 | 용도 |
|------|------|
| Sage | 차분한 녹색 계열 |
| Ocean | 바다 블루 계열 |
| Peach | 피치 계열 |
| Lavender | 라벤더 보라 계열 |
| Rose | 장미 핑크 계열 |
| Cloud | 구름 그레이 계열 |
| Honey | 꿀 옐로우 계열 |
| Matcha | 말차 그린 계열 |
| Mocha | 모카 브라운 계열 |
| Coral | 코랄 계열 |
| Berry | 베리 퍼플 계열 |
| Sky | 하늘 블루 계열 |

각 색상은 4단계 농도(연한 -> 진한)로 히트맵의 "기록이 쌓이면 색이 진해지는" 특성을 표현합니다.

---

## 2. 타이포그래피

### 폰트 패밀리
```
제목(Heading): "Pretendard", -apple-system, BlinkMacSystemFont, sans-serif
본문(Body): "Pretendard", -apple-system, BlinkMacSystemFont, sans-serif
브랜드/영문 강조: "DM Serif Display", Georgia, serif
```

- **Pretendard**: 한국어와 영문 모두 깔끔하게 표현, 가독성 우수
- **DM Serif Display**: 브랜드명(dstudio), Hero 타이핑 애니메이션, 영문 강조 요소에 사용

### 사이즈 체계 (rem 기준, base 16px)

| 토큰 | 모바일 | 데스크톱 | 용도 |
|------|--------|---------|------|
| `display` | 2.25rem (36px) | 3.5rem (56px) | Hero 헤드라인 |
| `h1` | 1.875rem (30px) | 2.5rem (40px) | 섹션 제목 |
| `h2` | 1.5rem (24px) | 2rem (32px) | 서브 섹션 제목 |
| `h3` | 1.25rem (20px) | 1.5rem (24px) | 카드 제목 |
| `body-lg` | 1.125rem (18px) | 1.25rem (20px) | 리드 텍스트 |
| `body` | 1rem (16px) | 1rem (16px) | 본문 |
| `body-sm` | 0.875rem (14px) | 0.875rem (14px) | 보조 텍스트 |
| `caption` | 0.75rem (12px) | 0.75rem (12px) | 캡션 |

### 폰트 웨이트
| 웨이트 | 값 | 용도 |
|--------|-----|------|
| Regular | 400 | 본문 텍스트 |
| Medium | 500 | 강조 본문, 네비게이션 |
| SemiBold | 600 | 서브 헤딩, 버튼 |
| Bold | 700 | 헤딩 |

### 행간 (Line Height)
- 헤딩: 1.3
- 본문: 1.7
- 캡션: 1.5

### 자간 (Letter Spacing)
- 헤딩: -0.02em
- 본문: 0em
- 캡션/라벨: 0.04em (대문자 라벨)

### 톤 & 보이스 가이드
- **해요체** 사용: 친구처럼 편안하지만 예의 바른 톤
- 조용하고 따뜻하게. 과장하거나 흥분하지 않기
- 기술 용어/과장 표현 지양
- 일상적인 언어, 작은 성취 응원, "함께"라는 감정 전달

---

## 3. 간격 시스템 (Spacing)

```
4px  - xs
8px  - sm
16px - md
24px - lg
32px - xl
48px - 2xl
64px - 3xl
80px - 4xl
120px - 5xl
```

- 섹션 간 패딩: 모바일 80px / 데스크톱 120px
- 컨테이너 최대 너비: 1200px
- 컨테이너 좌우 패딩: 모바일 20px / 태블릿 40px / 데스크톱 auto (중앙 정렬)

---

## 4. 섹션 구성 및 상세 명세

---

### 4.1 Navigation (네비게이션)

**레이아웃**
- 고정 상단 바 (sticky), 높이 64px
- 배경: `#FAF7F2` (스크롤 시 `rgba(250, 247, 242, 0.95)` + backdrop-blur 12px)
- 좌측: dstudio 로고 (텍스트 로고, DM Serif Display, 20px)
- 우측: 네비게이션 링크 (About, Products, Philosophy, Contact)
- 모바일: 햄버거 메뉴 (우측)

**텍스트 내용**
```
로고: dstudio
메뉴: About / Products / Philosophy / Contact
```

**모바일 메뉴**
- 풀스크린 오버레이, 배경 `#FAF7F2`
- 메뉴 항목 세로 중앙 정렬, body-lg 사이즈
- 부드러운 페이드인 (300ms ease)

---

### 4.2 Hero 섹션

**레이아웃**
- 전체 뷰포트 높이 (100vh), 세로 중앙 정렬
- 배경: `#FAF7F2`
- 텍스트 중앙 정렬
- 하단에 부드러운 스크롤 인디케이터 (아래 화살표, 미세한 바운스 애니메이션)

**컴포넌트 구조**
```
[64px 상단 여백 - 네비게이션 높이]

        [D 타이핑 애니메이션 영역] - 브랜드 아이덴티티 핵심
        [32px 간격]
        [메인 헤드라인] - display 사이즈, Bold
        [서브카피] - body-lg, Text Secondary 색상
        [24px 간격]
        [CTA 버튼] - 앱스토어 다운로드 링크

        [스크롤 인디케이터]
```

#### D 타이핑 애니메이션 (Hero 핵심 요소)

dstudio의 "D"가 여러 의미를 지닌다는 브랜드 아이덴티티를 타자기 스타일 애니메이션으로 표현합니다.

**동작 방식**
```
[D] studio  ->  타이핑 커서 깜빡임과 함께 "D" 부분이 순환 변경

  Daily studio     (매일의 기록)
  Dot studio       (점으로 채우는)
  Diary studio     (나만의 일기장)
  Design studio    (기록을 디자인하는)
  dstudio          (최종 고정)
```

**애니메이션 시퀀스**
1. 페이지 로드 후 800ms 대기
2. "Daily" 글자가 타자기처럼 한 글자씩 타이핑 (각 글자 80ms) -> "Daily studio" 완성
3. 1.5초 유지
4. "Daily" 글자가 한 글자씩 지워짐 (각 글자 50ms, 역순)
5. 300ms 대기 (커서만 깜빡)
6. "Dot" 타이핑 -> "Dot studio" -> 1.5초 유지 -> 지움
7. "Diary" 타이핑 -> "Diary studio" -> 1.5초 유지 -> 지움
8. "Design" 타이핑 -> "Design studio" -> 1.5초 유지 -> 지움
9. "d" 한 글자만 타이핑 -> "dstudio" (최종 형태)
10. 최종 형태에서 커서 3번 깜빡 후 커서 사라짐
11. (선택) 5초 후 다시 1번부터 반복 또는 최종 형태 유지

**타이핑 커서 스타일**
```
커서: 2px 너비의 세로 막대 (|)
색상: #D4967A (Accent - Warm Coral)
깜빡임: opacity 0<->1, 530ms 주기
높이: 폰트 높이와 동일
커서 위치: 현재 타이핑 중인 글자 직후
```

**타이핑 텍스트 스타일**
```
폰트: DM Serif Display
사이즈: display (모바일 36px / 데스크톱 56px)
웨이트: 400 (DM Serif Display 기본)
색상: #3D3429 (Text Primary)
"studio" 부분: #A69E95 (Text Muted) - D 부분보다 연하게 처리하여 D에 시선 집중
정렬: 중앙 정렬
```

**변경되는 D 부분 강조**
```
변경되는 접두어 (Daily, Dot 등): #8B7355 (Primary) - 살짝 따뜻한 갈색으로 강조
"studio" 고정 부분: #A69E95 (Text Muted)
최종 "dstudio": 전체 #3D3429 (Text Primary)로 통일
```

**텍스트 내용**
```
D 타이핑 애니메이션: (위에 설명한 시퀀스)

메인 헤드라인: 하루를 점으로 채우다
서브 헤드라인(영문): Every day, a dot.
서브카피: 매일의 기록이 점이 되는 나만의 캘린더.
         매일 1분이면 충분해요. to dot으로 시작해 보세요.
CTA 버튼: App Store에서 다운로드
```

**간격**
- 타이핑 애니메이션 영역 -> 헤드라인: 32px
- 헤드라인 -> 영문 서브 헤드라인: 8px
- 영문 서브 헤드라인 -> 서브카피: 24px
- 서브카피 -> CTA 버튼: 32px

**타이핑 애니메이션 접근성**
- `prefers-reduced-motion` 활성화 시: 애니메이션 없이 "dstudio" 최종 형태만 표시
- 아래에 작은 텍스트로 "Daily, Dot, Diary, Design..." 표시 (caption, Text Muted)

---

### 4.3 About 섹션

**레이아웃**
- 배경: `#F0EBE3` (Warm Beige)
- 섹션 패딩: 모바일 80px 20px / 데스크톱 120px auto
- 2컬럼 레이아웃 (데스크톱) / 1컬럼 (모바일)
- 좌측: 텍스트 콘텐츠 (60%)
- 우측: 장식 요소 - 미니 히트맵 그래픽 (점들이 모여 하나의 패턴을 이루는 형태, 40%)

**컴포넌트 구조**
```
[섹션 라벨] - caption, Accent 색상, 대문자
[섹션 제목] - h1, Bold
[24px 간격]
[본문 텍스트 1] - body-lg, Text Primary
[16px 간격]
[본문 텍스트 2] - body, Text Secondary
[48px 간격]
[키워드 태그 그룹] - 3개의 둥근 태그
```

**텍스트 내용**
```
섹션 라벨: ABOUT
섹션 제목: 기록의 온도를
          디자인합니다
본문 텍스트 1:
  dstudio는 일상을 기록하는 경험을 더 따뜻하고 의미 있게
  만들어가는 앱 개발 스튜디오예요.

본문 텍스트 2:
  화려한 기능보다 매일 꺼내보고 싶은 편안함을 추구해요.
  사람들의 하루가 작은 점이 되어 모이면,
  그것이 하나의 아름다운 그림이 된다고 믿고 있어요.

키워드 태그:
  - 일상의 기록
  - 따뜻한 디자인
  - 매일의 습관
```

**키워드 태그 스타일**
- 배경: `#FAF7F2`, 테두리: `#B8A590`
- border-radius: 24px
- 패딩: 8px 20px
- 폰트: body-sm, Medium, Text Primary

---

### 4.4 Products 섹션 (to dot - 습관 히트맵 캘린더)

**레이아웃**
- 배경: `#FAF7F2` (Cream White)
- 전체 너비 사용, 중앙 정렬
- 앱 소개 중심의 쇼케이스 레이아웃

**컴포넌트 구조**
```
[섹션 라벨] - caption, Brand Green 색상
[앱 타이틀 영역]
  [앱 이름] - h1, Bold, DM Serif Display
  [앱 부제] - body-lg, Text Secondary
[48px 간격]
[앱 쇼케이스 영역]
  +---------------------------------------------------+
  |   [iPhone 목업 - 3개 나란히]                         |
  |   좌: 히트맵 캘린더 뷰 (점들이 채워진 격자)            |
  |   중앙: 오늘의 기록 화면 (습관 체크 + 색 선택)         |
  |   우: 친구와 함께 보기 화면                           |
  +---------------------------------------------------+
[48px 간격]
[핵심 기능 소개 카드] - 스크롤 또는 그리드
[48px 간격]
[히트맵 인터랙티브 데모] - 시각적 포인트 요소
[48px 간격]
[앱스토어 다운로드 버튼]
```

**텍스트 내용**
```
섹션 라벨: PRODUCTS
앱 이름: to dot
앱 부제: 습관 히트맵 캘린더
앱 태그라인: 매일의 기록이 점이 되는 나만의 캘린더

기능 카드 1:
  아이콘: 히트맵 격자 (4x4 점 격자, 농도가 다른)
  제목: 히트맵 기록
  설명: 매일의 활동을 나만의 색으로 기록하세요.
       기록이 쌓이면 색이 진해져요.
       내가 얼마나 해왔는지 한눈에 보여요.

기능 카드 2:
  아이콘: 두 개의 겹치는 히트맵
  제목: 함께 채우는 기록
  설명: 혼자 하는 습관은 외로우니까요.
       친구를 추가해서 서로의 히트맵을 볼 수 있어요.
       비교가 아닌, 함께 채우는 즐거움이에요.

기능 카드 3:
  아이콘: 초록색 동그라미 (온라인 인디케이터)
  제목: 실시간 온라인
  설명: 친구가 지금 활동 중인지 실시간으로 확인할 수 있어요.
       같은 시간, 함께 기록하고 있다는 느낌이 좋아요.

기능 카드 4:
  아이콘: 클라우드 + 체크
  제목: 클라우드 백업
  설명: 기록은 자동으로 안전하게 보관돼요.
       기기를 바꾸거나 앱을 삭제해도 걱정 없어요.

기능 카드 5:
  아이콘: 홈 화면 위젯 모양
  제목: 홈 위젯
  설명: 홈 화면에서 바로 나의 히트맵을 확인하세요.
       앱을 열지 않아도 한눈에 볼 수 있어요.

기능 카드 6:
  아이콘: 반달 (다크모드)
  제목: 다크 모드 & 오프라인
  설명: 밤에도 편안하게 사용할 수 있어요.
       인터넷이 없어도 기록은 계속돼요.

앱스토어 버튼: App Store에서 만나보세요
```

**기능 카드 스타일**
- 배경: `#F5F1EB` (Soft Linen)
- border-radius: 16px
- 패딩: 32px
- 아이콘: 48px, Brand Green `#2F8552` 색상
- 제목: h3, SemiBold
- 설명: body-sm, Text Secondary
- 호버 시: 그림자 확대 + 살짝 위로 이동 (-4px)
- 데스크톱: 3x2 그리드 / 태블릿: 2컬럼 / 모바일: 1컬럼

**iPhone 목업 영역**
- 3개의 스크린 이미지 placeholder (border-radius: 32px, 그림자)
- 스크린 1 (좌): 히트맵 캘린더 뷰 - 점들이 채워진 달력 격자, 기록이 쌓일수록 진해지는 색상
- 스크린 2 (중앙): 오늘의 기록 화면 - 습관 체크리스트 + 색 선택
- 스크린 3 (우): 친구와 함께 보기 - 친구 히트맵 나란히 표시, 실시간 온라인 표시
- 중앙 이미지: scale(1.05), z-index 높게
- 좌우 이미지: rotate(-5deg) / rotate(5deg), opacity 0.85
- 그림자: `0 20px 60px rgba(61, 52, 41, 0.15)`

**히트맵 인터랙티브 데모 (시각적 포인트 요소)**
- Products 섹션 하단에 작은 인터랙티브 히트맵 격자 배치
- 7x5 크기의 점 격자 (한 달치 캘린더 느낌)
- 각 점은 10px 원형, 간격 4px
- 스크롤로 섹션에 진입하면 점들이 하나씩 색이 채워지는 애니메이션
- 색상은 Brand Green 4단계 농도 사용 (`#E8F5E9` -> `#A5D6A7` -> `#52B970` -> `#2F8552`)
- 점이 채워지는 순서: 랜덤하되 자연스럽게 (좌상단에서 시작, 빈칸 일부 남김)
- 하단에 캡션: "기록이 쌓이면 색이 진해져요." (body-sm, Text Muted)

---

### 4.5 Philosophy 섹션

**레이아웃**
- 배경: `#5C4A35` (Primary Dark) - 어두운 섹션으로 시각적 변화
- 텍스트: `#F5F0E8` (Off White)
- 중앙 정렬, 최대 너비 800px

**컴포넌트 구조**
```
[섹션 라벨] - caption, Accent Soft 색상
[48px 간격]
[인용문 스타일 텍스트] - h2, Bold, 중앙 정렬
[32px 간격]
[구분선] - 중앙, 48px 너비, 1px, Accent Soft 색상
[32px 간격]
[철학 설명 텍스트] - body-lg, Text On Dark
[48px 간격]
[가치 키워드 3개] - 가로 나란히
```

**텍스트 내용**
```
섹션 라벨: PHILOSOPHY

인용문:
  완벽하지 않아도 괜찮아요.
  기록은 있는 그대로의
  오늘을 남기는 일이니까요.

철학 설명:
  기록이 부담이 되지 않았으면 좋겠어요.
  거창하지 않아도, 매일이 아니어도 괜찮아요.
  체크리스트 대신 점 하나로, 복잡한 글 대신 색 하나로.
  당신이 편안하게 오늘을 남길 수 있도록,
  dstudio는 가장 쉬운 방법을 고민해요.

가치 키워드:
  01 — 편안함
  "부담 없이 시작할 수 있는 기록"

  02 — 함께
  "혼자가 아닌, 같이 채워가는 습관"

  03 — 꾸준함
  "작은 점이 모여 만드는 나만의 그림"
```

**가치 키워드 스타일**
- 3컬럼 (데스크톱) / 1컬럼 (모바일)
- 번호: caption, Accent Soft 색상
- 키워드: h3, Bold, Off White
- 설명: body-sm, Text On Dark (opacity 0.7)
- 구분선: 좌측 2px, Accent 색상, 높이 32px (각 항목 좌측)

---

### 4.6 Contact 섹션

**레이아웃**
- 배경: `#F0EBE3` (Warm Beige)
- 중앙 정렬, 심플한 구성

**컴포넌트 구조**
```
[섹션 라벨] - caption, Accent 색상
[섹션 제목] - h1, Bold
[서브카피] - body-lg, Text Secondary
[32px 간격]
[이메일 링크] - h2, Primary 색상, 밑줄 hover 효과
```

**텍스트 내용**
```
섹션 라벨: CONTACT
섹션 제목: 함께 이야기해요
서브카피: 제안, 피드백, 또는 그냥 안부라도 좋아요.
         편하게 연락 주세요.

이메일: admin@dstudio.kr
```

**이메일 링크 스타일**
- DM Serif Display 폰트
- 색상: Primary (`#8B7355`)
- 호버 시: 밑줄 애니메이션 (좌->우 언더라인 확장)

---

### 4.7 Footer

**레이아웃**
- 배경: `#3D3429` (Charcoal)
- 텍스트: `#A69E95` (Text Muted와 유사)
- 패딩: 48px
- 중앙 정렬

**컴포넌트 구조**
```
[로고] - dstudio, DM Serif Display, Off White 색상
[16px 간격]
[짧은 태그라인] - body-sm, Muted
[24px 간격]
[구분선] - 전체 너비, 1px, rgba(255,255,255,0.1)
[24px 간격]
[카피라이트] - caption, Muted
```

**텍스트 내용**
```
로고: dstudio
태그라인: 매일의 기록을 디자인합니다
카피라이트: (c) 2025 dstudio. All rights reserved.
```

---

## 5. 인터랙션 가이드

### 5.1 호버 효과

| 요소 | 효과 | 지속시간 |
|------|------|---------|
| 네비게이션 링크 | 색상 Primary로 변경, 하단 2px 밑줄 확장 | 250ms ease |
| CTA 버튼 | 배경색 살짝 밝아짐, 위로 2px 이동, 그림자 확대 | 200ms ease-out |
| 기능 카드 | 위로 4px 이동, 그림자 확대 | 300ms ease |
| 이메일 링크 | 밑줄 좌->우 확장 애니메이션 | 300ms ease |
| 키워드 태그 | 배경색 Primary Light, 텍스트 White | 200ms ease |

### 5.2 스크롤 애니메이션

| 섹션 | 효과 | 설정 |
|------|------|------|
| 모든 섹션 제목 | 아래->위 페이드인 | translateY(30px) -> 0, opacity 0->1, 600ms, ease-out |
| About 본문 | 아래->위 페이드인 (제목보다 200ms 딜레이) | translateY(20px) -> 0, 500ms |
| 기능 카드 | 순차적 페이드인 | 각 카드 100ms 딜레이, translateY(20px) -> 0, 500ms |
| iPhone 목업 | 아래->위 올라오며 등장 | translateY(60px) -> 0, 800ms, ease-out |
| 히트맵 데모 | 점들이 하나씩 색이 채워짐 | 각 점 50ms 딜레이, opacity+scale 0->1, 300ms |
| Philosophy 인용문 | 페이드인 | opacity 0->1, 800ms |
| 가치 키워드 | 좌측에서 페이드인 | translateX(-20px) -> 0, 500ms, 각 200ms 딜레이 |

**스크롤 트리거**: Intersection Observer 사용, threshold 0.2 (요소가 20% 보일 때 시작)

### 5.3 페이지 로딩 및 Hero 타이핑 시퀀스

```
1. 배경 페이드인 (200ms)
2. 네비게이션 바 페이드인 (300ms)
3. 800ms 대기
4. Hero 타이핑 애니메이션 시작:
   a. "Daily" 타이핑 (각 글자 80ms) -> "Daily studio" -> 1.5s 유지
   b. "Daily" 삭제 (각 글자 50ms) -> 300ms 대기
   c. "Dot" 타이핑 -> "Dot studio" -> 1.5s 유지 -> 삭제
   d. "Diary" 타이핑 -> "Diary studio" -> 1.5s 유지 -> 삭제
   e. "Design" 타이핑 -> "Design studio" -> 1.5s 유지 -> 삭제
   f. "d" 타이핑 -> "dstudio" 확정 -> 커서 3회 깜빡 후 사라짐
5. 타이핑 완료 후 200ms 대기
6. 메인 헤드라인 "하루를 점으로 채우다" 아래->위 페이드인 (600ms)
7. 영문 서브 헤드라인 "Every day, a dot." 페이드인 (400ms, 100ms 딜레이)
8. 서브카피 페이드인 (400ms, 200ms 딜레이)
9. CTA 버튼 페이드인 (300ms, 200ms 딜레이)
10. 스크롤 인디케이터 페이드인 (300ms)
```

### 5.4 스크롤 인디케이터

- 위치: Hero 섹션 하단 중앙
- 아이콘: 작은 아래 화살표 (chevron-down)
- 애니메이션: 위아래 바운스, 2s 주기, ease-in-out
- 스크롤 시 opacity 감소하여 사라짐

### 5.5 네비게이션 스크롤 효과

- 해당 섹션에 도달 시 네비게이션 링크 활성화 (Active 상태 - Primary 색상)
- 스크롤 다운 시 네비게이션 바에 미세한 하단 그림자 추가
- 스무스 스크롤: `scroll-behavior: smooth`

---

## 6. 반응형 브레이크포인트

### 브레이크포인트 정의

| 이름 | 범위 | 컨테이너 패딩 |
|------|------|-------------|
| Mobile | 0 - 767px | 20px |
| Tablet | 768px - 1023px | 40px |
| Desktop | 1024px - 1439px | auto (max-width: 1200px) |
| Wide | 1440px+ | auto (max-width: 1200px) |

### 모바일 (0 - 767px)
- 네비게이션: 햄버거 메뉴
- Hero: display 36px, 세로 정렬, 타이핑 애니메이션 동일하게 적용
- About: 1컬럼, 장식 히트맵 요소 숨김
- Products: 목업 1개만 표시 (중앙), 기능 카드 1컬럼, 히트맵 데모 5x5 축소
- Philosophy: 가치 키워드 1컬럼, 세로 나열
- Contact: 이메일 폰트 크기 축소 (h3)
- 섹션 간 패딩: 80px

### 태블릿 (768px - 1023px)
- 네비게이션: 가로 링크 표시
- Hero: display 44px
- About: 1컬럼, 히트맵 장식 요소 우측 하단에 작게 배치
- Products: 목업 3개, 기능 카드 2컬럼, 히트맵 데모 7x5
- Philosophy: 가치 키워드 3컬럼
- Contact: 이메일 h2 사이즈
- 섹션 간 패딩: 100px

### 데스크톱 (1024px+)
- 풀 레이아웃 적용
- Hero: display 56px
- About: 2컬럼 (텍스트 60% + 히트맵 장식 40%)
- Products: 목업 3개, 기능 카드 3x2 그리드, 히트맵 데모 7x5
- 섹션 간 패딩: 120px

---

## 7. 컴포넌트 스타일 상세

### 7.1 버튼

**Primary Button (CTA)**
```
배경: #2F8552 (Brand Green) - Products 섹션 내
배경: #8B7355 (Primary) - 그 외 섹션
텍스트: #F5F0E8 (Off White)
폰트: body, SemiBold (600)
패딩: 14px 32px
border-radius: 12px
그림자: 0 4px 16px rgba(47, 133, 82, 0.25)
호버: 밝아짐, translateY(-2px), 그림자 확대
active: translateY(0), 그림자 축소
transition: all 200ms ease-out
```

**Secondary Button**
```
배경: transparent
테두리: 1.5px solid #8B7355
텍스트: #8B7355
폰트: body, SemiBold (600)
패딩: 14px 32px
border-radius: 12px
호버: 배경 #8B7355, 텍스트 #F5F0E8
transition: all 200ms ease
```

### 7.2 카드

```
배경: #F5F1EB (Soft Linen)
border-radius: 16px
패딩: 32px
그림자: 0 2px 12px rgba(61, 52, 41, 0.06)
호버: 그림자 0 8px 30px rgba(61, 52, 41, 0.12), translateY(-4px)
transition: all 300ms ease
```

### 7.3 구분선

```
색상: rgba(139, 115, 85, 0.15)
높이: 1px
Philosophy 섹션 내: rgba(232, 196, 176, 0.3), 너비 48px, 중앙 정렬
Footer: rgba(255, 255, 255, 0.1)
```

### 7.4 섹션 라벨 (공통)

```
폰트: caption (12px)
웨이트: SemiBold (600)
letter-spacing: 0.08em
text-transform: uppercase
색상: #D4967A (Accent) - 밝은 배경 위
색상: #2F8552 (Brand Green) - Products 섹션
색상: #E8C4B0 (Accent Soft) - 어두운 배경 위
```

### 7.5 히트맵 점 (Dot)

```
크기: 10px (기본) / 8px (모바일)
border-radius: 50% (완전 원형)
간격: 4px
색상 단계 (Brand Green 기준):
  Level 0 (미기록): #F0EBE3 (Warm Beige와 유사)
  Level 1 (연함): #E8F5E9
  Level 2 (중간): #A5D6A7
  Level 3 (진함): #52B970
  Level 4 (최대): #2F8552
transition: background-color 300ms ease, transform 300ms ease
호버: scale(1.3), 해당 색상 약간 밝게
```

---

## 8. 에셋 요구사항

### 필요 이미지
1. **iPhone 목업 스크린샷 3장**: to dot 앱의 주요 화면
   - 스크린 1: 히트맵 캘린더 뷰 (점들이 격자 형태로 채워진 달력, 색 농도 다양)
   - 스크린 2: 오늘의 기록 화면 (습관 항목 + 색 선택 UI)
   - 스크린 3: 친구와 함께 보기 (친구 히트맵 + 실시간 온라인 표시)
   - 크기: 각 375x812px (@2x)
   - 앱 배경색 참고: `#F5F2EB` (라이트 모드), `#141311` (다크 모드)
   - 실제 앱 스크린샷이 없으면 placeholder 컬러 블록으로 대체

2. **App Store 배지**: Apple App Store 공식 다운로드 배지
   - 검은 배경 버전 사용

3. **파비콘**: dstudio 로고 기반, 32x32px, 16x16px

4. **OG 이미지**: 소셜 공유용, 1200x630px
   - 배경: Cream White
   - 중앙: dstudio 로고 + "하루를 점으로 채우다"

### 아이콘
- Lucide Icons 또는 Heroicons (outline 스타일) 사용
- 기능 카드의 커스텀 아이콘은 SVG로 직접 제작 (히트맵, 클라우드, 위젯 등)
- 크기: 24px (네비게이션), 48px (기능 카드)

---

## 9. 접근성 (Accessibility)

- 색상 대비 비율: 최소 4.5:1 (AA 기준 충족)
  - Text Primary `#3D3429` on Background `#FAF7F2` -> 약 10:1
  - Text On Dark `#F5F0E8` on Primary Dark `#5C4A35` -> 약 7:1
  - Brand Green `#2F8552` on Background `#FAF7F2` -> 약 4.8:1 (AA 충족)
- 포커스 인디케이터: Primary 색상 2px outline, offset 2px
- 모든 이미지에 alt 텍스트 제공
- 시맨틱 HTML 태그 사용 (header, nav, main, section, footer)
- 키보드 네비게이션 지원
- `prefers-reduced-motion` 미디어 쿼리로 애니메이션 비활성화 옵션
  - 타이핑 애니메이션: 즉시 "dstudio" 최종 형태 표시
  - 히트맵 데모: 즉시 완성 상태 표시
  - 스크롤 애니메이션: 즉시 표시, 트랜지션 없음

---

## 10. 전체 페이지 흐름 요약

```
+------------------------------------------+
|  Navigation (sticky)                      |
|  [dstudio]          About Products ...    |
+------------------------------------------+
|                                          |
|          [Daily|Dot|Diary|Design]         |
|                 studio                    |
|        (타자기 애니메이션으로 D 순환)       |
|                                          |
|         하루를 점으로 채우다               |
|          Every day, a dot.               |
|                                          |
|       [App Store에서 다운로드]             |
|              Hero 섹션                    |
|        BG: Cream White #FAF7F2           |
+------------------------------------------+
|                                          |
|  ABOUT                                   |
|  기록의 온도를        [히트맵 장식]        |
|  디자인합니다          [점 패턴]           |
|                                          |
|  [일상의 기록] [따뜻한 디자인] [매일의 습관] |
|        BG: Warm Beige #F0EBE3            |
+------------------------------------------+
|                                          |
|  PRODUCTS                                |
|  to dot - 습관 히트맵 캘린더              |
|                                          |
|     [iPhone] [iPhone] [iPhone]           |
|     캘린더뷰  오늘기록  함께보기           |
|                                          |
|  [히트맵 기록] [함께 채우기] [실시간]      |
|  [클라우드]   [홈 위젯]   [다크모드]       |
|                                          |
|     [히트맵 인터랙티브 데모]               |
|     "기록이 쌓이면 색이 진해져요."         |
|                                          |
|     [App Store에서 만나보세요]             |
|        BG: Cream White #FAF7F2           |
+------------------------------------------+
|                                          |
|  PHILOSOPHY                              |
|  완벽하지 않아도 괜찮아요.                 |
|  기록은 있는 그대로의                     |
|  오늘을 남기는 일이니까요.                 |
|  01 편안함 | 02 함께 | 03 꾸준함          |
|        BG: Deep Brown #5C4A35            |
+------------------------------------------+
|                                          |
|  CONTACT                                 |
|  함께 이야기해요                          |
|  admin@dstudio.kr                        |
|        BG: Warm Beige #F0EBE3            |
+------------------------------------------+
|  dstudio                                 |
|  매일의 기록을 디자인합니다                |
|  (c) 2025 dstudio                        |
|        BG: Charcoal #3D3429              |
+------------------------------------------+
```

배경색이 Cream White -> Warm Beige -> Cream White -> Deep Brown -> Warm Beige -> Charcoal로 교차하며 시각적 리듬감을 형성합니다.

---

## 11. 브랜드 아이덴티티 핵심: D의 의미

dstudio의 "D"는 하나의 의미에 고정되지 않습니다.

| 접두어 | 의미 | 연결 |
|--------|------|------|
| **D**aily | 매일, 일상 | 매일의 기록을 만드는 스튜디오 |
| **D**ot | 점 | to dot 앱의 핵심 - 하루를 점으로 기록 |
| **D**iary | 일기 | 개인의 이야기를 담는 공간 |
| **D**esign | 디자인 | 기록의 경험을 디자인하는 스튜디오 |

Hero 섹션의 타이핑 애니메이션을 통해 이 다층적 의미를 사용자에게 자연스럽게 전달하며, 최종적으로 "dstudio"라는 브랜드명으로 수렴하여 모든 의미를 아우르는 하나의 이름임을 보여줍니다.

---

## 12. to dot 앱 상세 정보 (개발 참고)

### 앱 기본 정보
- **정식 명칭**: to dot -- 습관 히트맵 캘린더
- **부제목**: 매일의 기록이 점이 되는 나만의 캘린더
- **메인 태그라인**: "하루를 점으로 채우다" / "Every day, a dot."
- **카테고리**: 생산성 (Productivity) / 건강 및 피트니스

### 앱 색상 시스템 (참고)
```
Canvas 배경: #F5F2EB (라이트) / #141311 (다크)
Background: #FDFBF7 / #1C1B19
Surface: #FFFFFF / #252422
텍스트 Primary: #2D2D2D / #F5F2ED
텍스트 Secondary: #6B6560 / #B5B0A8
브랜드 액센트(그린): #2F8552 / #52B970
```

### 12가지 습관 히트맵 색상
Sage, Ocean, Peach, Lavender, Rose, Cloud, Honey, Matcha, Mocha, Coral, Berry, Sky

각 색상은 4단계 농도로 제공되어 기록의 빈도/강도를 시각적으로 표현합니다.

### 핵심 기능 요약
1. 히트맵 기록 - 매일의 활동을 색으로 기록, 쌓일수록 진해짐
2. 함께 채우는 기록 - 친구 추가, 서로의 히트맵 공유
3. 실시간 온라인 - 친구 활동 상태 실시간 확인
4. 클라우드 백업 - 자동 보관, 기기 변경 안심
5. 홈 위젯 - 홈 화면에서 히트맵 바로 확인
6. 다크 모드 - 밤에도 편안하게
7. 오프라인 사용 - 인터넷 없이도 기록 가능
