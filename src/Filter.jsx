import React, { useState } from 'react'
import { useNavigate,useLocation, createSearchParams,useSearchParams} from 'react-router-dom'


export default function Filter() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams,setSearchParams] = useSearchParams()
    const [ s,setS] = useState(0)

    function removeElement(arr, element) {
        const index = arr.indexOf(element);
        if (index !== -1) {
          arr.splice(index, 1);
        }
      }
     let salary =location.state ?location.state.salary:0;
     let ai = location.state ? location.state.ai :[] ;
     let bi = location.state ?location.state.bi:[];
     let newSearchParams = new URLSearchParams(location.search);
     newSearchParams.set("q","filter")

     const handleCheckboxChange = (checked, value, list,nav) => {
        let param; 
           if(checked){
                 list.push(value)
           }else{
               removeElement(list,value)  
           }
           param = list.join(',')
           newSearchParams.delete(nav)
           newSearchParams.append(nav, param);
           navigate(`/filter?${createSearchParams(newSearchParams)}`,{state:{ai,bi,salary}})
         console.log(list,ai,bi)
      };
      
      const handleAiCheckboxChange = (e) => {
        handleCheckboxChange( e.target.checked, e.target.value, ai, "a");
      };
      
      const handleBiCheckboxChange = (e) => {
        handleCheckboxChange(e.target.checked, e.target.value, bi,"b");
      };
    
      const handleSalary = (e)=>{
        salary = e.target.value;
        newSearchParams.set("salary",e.target.value)
        navigate(`/filter?${createSearchParams(newSearchParams)}`,{state:{ai,bi,salary}})
      }
      
  return (
    <div>Filter
        <div>
            <label>Range</label>
            <input type="range" value={salary} min="0" max="20" onChange={handleSalary}></input>
            <label>I am GOOD</label>
            <input type="checkbox" value="a" onChange={handleAiCheckboxChange} name="ai" checked={ai.includes("a")}></input><label>A</label>
            <input type="checkbox" value="c" onChange={handleAiCheckboxChange} name="ai" checked={ai.includes("c")} ></input><label>C</label>
            <input type="checkbox" value="e" onChange={handleAiCheckboxChange} name="ai" checked={ai.includes("e")}></input><label>E</label>
            <input type="checkbox" value="g" onChange={handleAiCheckboxChange} name="ai" checked={ai.includes("g")}></input><label>G</label>
            <input type="checkbox" value="i" onChange={handleAiCheckboxChange} name="ai" checked={ai.includes("i")}></input><label>I</label>
            <input type="checkbox" value="k" onChange={handleAiCheckboxChange} name="ai"checked={ai.includes("k")} ></input><label>K</label>
          <form style={{display:"flex"}} >
            <label>I am BAD</label>
            <input type="checkbox" value="b" onChange={handleBiCheckboxChange} name="bi" checked={bi.includes("b")} ></input><label>B</label>
            <input type="checkbox" value="d" onChange={handleBiCheckboxChange} name="bi" checked={bi.includes("d")} ></input><label>D</label>  
            <input type="checkbox" value="f" onChange={handleBiCheckboxChange} name="bi" checked={bi.includes("f")}></input><label>F</label>
            <input type="checkbox" value="h" onChange={handleBiCheckboxChange} name="bi" checked={bi.includes("h")}></input><label>H</label>
            <input type="checkbox" value="j" onChange={handleBiCheckboxChange} name="bi" checked={bi.includes("j")}></input><label>J</label>
            <input type="checkbox" value="l" onChange={handleBiCheckboxChange} name="bi" checked={bi.includes("l")}></input><label>L</label>
        </form>
        </div>
        <h1>{searchParams?searchParams.get("a"):'nothing'}</h1>
        <h1>{searchParams?searchParams.get("b"):'nothing'}</h1>
    </div>
  )

}