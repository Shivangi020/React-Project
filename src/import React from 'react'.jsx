import React from 'react'
import { useNavigate,useLocation, createSearchParams,useSearchParams} from 'react-router-dom'


export default function Filter() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams,setSearchParams] = useSearchParams()
    
    console.log(searchParams.get("a"))
    console.log(searchParams.get("b"))
    // console.log(location)
     let ai ;
     let bi;
    const handle = (e)=>{
        ai = location.state ? location.state.ai : [];
        bi = location.state ? location.state.bi : [];
        if (e.target.name === 'ai') {
            if (e.target.checked) {
              ai.push(e.target.value);
            //   console.log(ai);
              let x = ai.join(',');
            //   console.log(x);
      
              const newSearchParams = new URLSearchParams(location.search);
              newSearchParams.delete('a')
              newSearchParams.append('a', x);;
             navigate(`/filter?${createSearchParams(newSearchParams)}`,{state:{ai,bi}})
            } else {
              let aun = ai.filter((i) => i !== e.target.value);
              ai = aun;
              let x = ai.join(',');
              const newSearchParams = new URLSearchParams(location.search);
              newSearchParams.delete('a')
              newSearchParams.append('a', x);
              navigate(`/filter?${createSearchParams(newSearchParams)}`,{state:{ai,bi}})
        }
    }
        if(e.target.name === "bi"){
            // console.log(e.target.name)
            if (e.target.checked) {
                // console.log(location.state.bi)
                bi.push(e.target.value);
                let x = bi.join(',');
                // console.log(x);
                const newSearchParams = new URLSearchParams(location.search);
                newSearchParams.delete('b')
                newSearchParams.append('b', x);;
               navigate(`/filter?${createSearchParams(newSearchParams)}`,{state:{ai,bi}})
              } else {
                let aun = bi.filter((i) => i !== e.target.value);
                bi = aun;
                let x = bi.join(',');
                const newSearchParams = new URLSearchParams(location.search);
                newSearchParams.delete('b')
                newSearchParams.append('b', x);
                navigate(`/filter?${createSearchParams(newSearchParams)}`,{state:{ai,bi}})
        }
    }

}

  return (
    <div>Filter
        <div>
            <input type="checkbox" value="a" onChange={handle} name="ai"></input><label>A</label>
            <input type="checkbox" value="b" onChange={handle} name="bi" ></input><label>B</label>
            <input type="checkbox" value="c" onChange={handle} name="ai" ></input><label>C</label>
            <input type="checkbox" value="d" onChange={handle} name="bi" ></input><label>D</label>
            <input type="checkbox" value="e" onChange={handle} name="ai"></input><label>E</label>
            <input type="checkbox" value="f" onChange={handle} name="bi" ></input><label>F</label>
            <input type="checkbox" value="g" onChange={handle} name="ai"></input><label>G</label>
            <input type="checkbox" value="h" onChange={handle} name="bi"></input><label>H</label>
            <input type="checkbox" value="i" onChange={handle} name="ai" ></input><label>I</label>
            <input type="checkbox" value="j" onChange={handle} name="bi"></input><label>J</label>
            <input type="checkbox" value="k" onChange={handle} name="ai" ></input><label>K</label>
            <input type="checkbox" value="l" onChange={handle} name="bi"></input><label>L</label>
        </div>
        {/* <h1>{searchParams?searchParams.a:'nothing'}</h1>
        <h1>{searchParams?searchParams.b:'nothing'}</h1> */}
    </div>
  )

}