import React ,{useState , createContext} from 'react'
import CardSection from './CardSection';
import Refresh from './Refresh';
import './Tour.css'


export const TourGlobalData = createContext()

function TourMainPage() {
  const [tour ,setTour] = useState([]);
  const [refresh ,setRefresh] = useState(false)
  return (
    <TourGlobalData.Provider value={{tour,setTour,refresh,setRefresh}}>
    <div className='tour-main-page'>
       <div className='tour-heading'>Our Tours</div>
       <hr className='heading-hr'></hr>
       {refresh ? <Refresh/> :<CardSection/>}
    </div>
    </TourGlobalData.Provider>
  )
}

export default TourMainPage