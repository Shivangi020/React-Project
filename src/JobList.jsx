import React ,{useState,useEffect}from 'react'
import { useSearchParams } from 'react-router-dom';

export default function JobList() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobProfiles, setJobProfiles] = useState();
  const [url,setUrl] = useState('http://localhost:9002/api/job/?')
  
  const fetchData = async (fetchUrl) => {
    setLoading(true);
    try {
      const response = await fetch(fetchUrl)
      const data = await response.json();
      if (data) {
        console.log(data)
        setJobProfiles(data.jobData);
        setLoading(false);
      } else {
        setIsError(true);
      }
    } catch (e) {
      setIsError(true);
      setLoading(false);
    }
  };

useEffect(()=>{
    const newUrl = `${url}${searchParams}`
    console.log(newUrl);
    fetchData(newUrl)
},[searchParams])

  return (
    <div>
     <h1>Job List</h1>
      <p>ALL JOBS WILL BE HERE</p>
    
    </div>
  )
}
