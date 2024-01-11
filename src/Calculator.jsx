import React,{useState} from 'react'
const arr=["C","/","*","-","7","8","9","4","+","5","6","1","2","3","0","=","00","."]
const Calculator = () => {
    const [text,setText]=useState("")
    const [expressArr,setExpressionArr]=useState([])
    const handleCalculate=(item)=>{
        if(["/","*","-","7","8","9","4","+","5","6","1","2","3","0","00","."].includes(item)){
            setExpressionArr((prev)=>[...prev,item])
        }
        if(item=="C"){
            setExpressionArr([])
        }
        if(item=="="){
            let t=eval(expressArr.join(""))
            setExpressionArr([t])
        }
    }
  return (
    <div>
        <h1 >Calculator</h1>
        <div className='input'>
            {/* <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/> */}
            {expressArr.length != 0?expressArr.join(""):0} 
        </div>
        <div className='container'>
         {arr.map((item,i)=>{
            return(
                <button className={`item${i}`} onClick={()=>handleCalculate(item)}>{item}</button>
            )
         })}
        </div>

    </div>
  )
}

export default Calculator