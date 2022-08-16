# Why NextJs?

- SSR 구현
- 각종 Optimization
- Hot Code Reloading
- Automatic Routing
- Automatic Code Splitting
- Prefetching
- Dynamic Components Import
- Static Exports



# SSR 이란?

클라이언트로 전달될 HTML 파일 내용(일부를) 미리 그려서 내려주는 것

- 클라이언트 랜더링의 속도를 빠르게 하여, 사용자 체감 속도 증진
- 검색 엔진이 JavaScript를 실행하지 않고 크롤링 가능 SEO(검색기능최적화)


# Nextjs - 2

* hydration : js 실행으로 interactive 할 준비 과정
* SSG : Build time 에 서버에서만 동작
* SSR : Request time 에 동작 / TTFB(서버응답시간) slow
* CSR : Request time 이후 동작 SWR

# Nextjs - 3

## Dynamic Routes
getStaticPaths / remark / dynamic routes

* getStaticPaths : [{params: {id : string}}] 목록을 리턴한다. params 안에 dynamic routes key 가 들어있어야함
- fallback : 'blocking'
- blocking 하고 HTML을 generate 하고 보여준다
- pre-rendering 목록에도 추가됨

* getStaticProps : id 별로 데이터를 읽어서 page에 props를 전달하도록 함
- 인자 context
- params
- return : props / revalidate(ISR로) / notFound: true (fallback: false 에선 무의미)

* Fallback for Dynamic routes
getStaticPaths 옵션 fallback : true
const router = useRouter();
router.isFallback

* Catch-all Routes
전체 받으려면 /pages/posts/[...id].js 로 셋하고
/posts/a , /posts/a/b , /posts/a/b/c 가 있는 경우

get Static Paths에서 [{params: {id:['a','b','c']}}]로 전달해야함

# Incremental Static Regeneration(ISR)

getStaticProps with revalidate(업데이트 주기 설정)

# getServerSideProps

- 인자 context
params / req / res / query

request 마다 동작하기 때문에 req.cookies 가능하다.


# Layouts
- 여러 Layout들을 사용할때는 Page.getLayout 활용가능

# Image Component and Optimization

- Improved Performance / Visual Stability / Faster Page Loads / Asset Flexibility

- 디바이스 사이즈 / format / CLS / lazy load / blur placeholder / resizing

# Script Optimization

- import Script from 'next/script'
- id /src / strategy

# Static File Serving

- public 폴더
- images / robots.txt / favicon.ico

# Fast Refresh

- React 구성요소일 경우 관련된 컴포넌트 혹은 파일만 update
- React 외부 요소면 전체 update(full reload)
- 로컬 상태 유지가 default // @refresh reset

# EsLint

- JS code 에서 문제가 될 부분을 찾고 고칠 수 있는 도구
- 코드가 지키고 싶은 규칙을 구성할 수 있음
- 여러 규칙을 합쳐서 나만의 룰 생성 가능

# 환경 변수

- .env.local
- HOST_NAME=localhost
- process.env.HOST_NAME
- HOST=http://$HOST_NAME
- NEXT_PUBLIC_ * 브라우저에 노출

# Routing
- pages file system
- Link client side route(viewport 에 들어오면 SSG로 prefetching)
- href={'/blog/${encodeURIComponent(post.slug)}'}
- href={{pathname:'/blog/[slug]', query:{slug: post.slug},}}

# Dynamic Routes
- [pid] 로 다이나믹한 url을 생성할 수 있게한다.
- router.query로 key와 value를 꺼낼 수 있다.
- catch all routes with [...slug] 하면 query 의 key slug에 배열로 값들이 존재
- optional catch all routes [[...slug]] slug 없는 경우도 대응 가능  