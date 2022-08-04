// import React, {useEffect, useState} from 'react'

export default function Launches({data}) {
  // const [data, setdata] = useState(null);

  // useEffect(() => {
  //   const fetchLaunches =  async () => {
  //     const res = await fetch("https://api.spacexdata.com/v3/launches")
  //     const data = await res.json();

  //     setdata(data);
  //   };

  //   fetchLaunches();
  // }, [])

  if (data == null) {
    return null;
  }
  return <div>
    <ul>
      <ol>
        {data.map((launch, index) => (
          <li key={index}>{launch.mission_name}</li>
        ))}
      </ol>
    </ul>
  </div>
}

// 빌드하는 순간에만 요청
export async function getStaticProps(context) {
  const res = await fetch("https://api.spacexdata.com/v3/launches")
  const data = await res.json();

  console.log("getStaticProps");
  
  return {
    props: {data}, // will be passed to the page component as props
  }
}


// 요청할 때마다 실행
// export async function getServerSideProps(context) {
//   const res = await fetch("https://api.spacexdata.com/v3/launches")
//   const data = await res.json();

//   console.log("getServerSideProps");

//   return {
//     props: {data},
//   }
// }