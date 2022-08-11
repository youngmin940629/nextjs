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

* getStaticProps : id 별로 데이터를 읽어서 page에 props를 전달하도록 함

* Fallback for Dynamic routes
getStaticPaths 옵션 fallback : true
const router = useRouter();
router.isFallback

* Catch-all Routes
전체 받으려면 /pages/posts/[...id].js 로 셋하고
/posts/a , /posts/a/b , /posts/a/b/c 가 있는 경우

get Static Paths에서 [{params: {id:['a','b','c']}}]로 전달해야함

