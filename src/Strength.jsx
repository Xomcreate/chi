import React, { useRef, useState } from 'react'

function Strength() {
  let [typo, setTypo] = useState('password')
  let [open,setOpen] = useState('👩')
  let [ww, setWw] = useState('0%')
  let [bgg, setBgg]= useState('')
  let getVal = useRef()
  let [forstrength,setForStrength] = useState('Weak')

  function typechanger() {
    if (typo == "password") {
      setTypo("text")
      setOpen("😍")
    } else {
      setTypo("password")
      setOpen("🙈")
    }
  }
  function checker() {
    if (getVal.current.value.length <= 4) {
      setWw("50px")
      setBgg("red")
      setForStrength("weak")
    } else if (getVal.current.value.length <= 8) {
      setWw("100px")
      setBgg("green")
      setForStrength("Medium")
    } 
    else if (getVal.current.value.length <= 10) {
      setWw("150px")
      setBgg("Yellow")
      setForStrength("Sharp")
    }
    else if (getVal.current.value.length <= 12) {
      setWw("200px")
      setBgg("white")
      setForStrength("Strength")
    }
    {
      
      
    }
  }
  
  return (

    <div className=' h-[100vh] grid justify-center items-center'>
        <div className=' h-[20vh] w-[30vw] bg-slate-500 grid grid-rows-2'>
          <div className=' flex justify-center items-center gap-[10px]'>
            <input className=' h-[6vh]' type={typo} ref={getVal} onInput={checker}/>
            <button className=' h-[6vh] bg-[yellow] w-[6vw] ' onClick={typechanger}>{open}</button>
          </div>
          <div className=' flex justify-center items-start gap-[5px] '>
            <div className=' bg-[black] h-[3vh] w-[200px] rounded-lg'>
              <div className='   h-[3vh] rounded-lg' style={{width:ww, backgroundColor:bgg,transition:"0.5s"}}></div>
            </div>
            <p> {forstrength}</p>
          </div>
         
        </div>
      
    </div>
  )
}

export default Strength