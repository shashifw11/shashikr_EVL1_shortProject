import React, { useState , useEffect} from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import axios from "axios" ; 
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]); 

  const [loading , setLoading] = useState(false) ; 
  const [page ,setPage] = useState(1) 

    console.log(page) ; 
      // console.log(data) ; 


  useEffect(()=>{
     getData()
    },[page]); 

     const getData = ()=>{ 
      setLoading(true)
      axios.get(`https://json-server-mocker-masai.herokuapp.com/candidates?_page=${page}&_limit=6`).then((data)=>{
        return setData(data.data)
      }).catch((err)=>{
        console.log(err)
      }) 
      setLoading(false)
     } 

  const onClick = (value)=>{
    setPage((PREV)=>PREV + value)
  }   

//   const myfun= (asd)=>{
//     console.log(asd);
//      getdata.sort((a,b)=>{
//          if(a.name>b.name) return asd ?1 : -1
//           else 
//            return !asd ?1 : -1
           
//      })
//      setGetdata([... getdata])
    
//  }

    const myFun = (value)=>{ 
      console.log(value);
      data.sort((a,b)=>{
          if(a.salary>b.salary) return value ?1 : -1
           else 
            return !value ?1 : -1
            
      })
      setData([... data])
    }
   

  return (
    <div className="App">
      <div>
        <Button myFun = {myFun} id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button onClick = {onClick}  title="PREV" id="PREV" />   
        <Button onClick = {onClick}  id="NEXT" title="NEXT" />
      </div> 
       {loading ? ("loading...") : (
      data.map((item) => {
        return <div key = {item.id}>
              <CandidateCard avatar= {item.avatar} name = {item.name} salary={item.salary} title={item.title} companyName={item.company_name}/>
                       </div>
            }))}
    </div>
  );
}
