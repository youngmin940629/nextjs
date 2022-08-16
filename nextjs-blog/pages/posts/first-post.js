import Link from 'next/link';
import Head from 'next/head';
import Layout from "../../components/layout"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FirstPost() {
  const router = useRouter();
  useEffect(() => {
    router.push("/posts/first-post/?counter=10", undefined, {shallow:true});
  },[])

  useEffect(() => {
    alert(router.query.counter);
  } , [router.query.counter])

  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <meta name="author" content="Chris Mills" />
        <meta
          name="description"
          content="이 페이지는 블로그 페이지입니다."
          ></meta>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}