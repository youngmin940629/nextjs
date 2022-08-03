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


export async function getServerSideProps(context) {
  const res = await fetch("https://api.spacexdata.com/v3/launches")
  const data = await res.json();

  console.log("getServerSideProps");

  return {
    props: {data},
  }
}