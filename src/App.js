import './App.css'
import { useState } from 'react'
import  {Display} from './form'
import PopupMsg  from './form'


function Regform(){
  let [products,updatemethod]=useState({
    fstname:'',
    lstName:'',
    EmailCheck:'',
    phoneNumber:'', 
    fatherName:'',
    motherName:'',
    interclgName:'',
    cgpa12th:'',
    btechClg:'',
    CgpaBtech:'',
    address:''
  })

  const handlingSubmitButton =(event)=>
  {
    event.preventDefault()
  //Api to send FORM DATA to back end
    fetch('http://localhost:8000/formData',{
      method : 'POST',
      header:{ 
        'content-type':'application/json',
      },
      body : JSON.stringify({...products})
    })
    .then((response)=>{
      console.log(response)
      response.json()})
    .then((data)=> {console.log(data)})
    .catch((error)=>console.log('error :',error))
//API process ends here

    Display({...products})
    PopupMsg({...products})

  }
  
return(
  < >
    <div className='regForm' >
    <form >
      <div className='header'>
            <h1 >Registration Form</h1>
          
      </div>
      
       <br/>
       <br/>
      <div className='part1'>
                  <label className='lableclass'  htmlFor="fname" >First Name :</label>
                  <input placeholder='Enter First Name' style={{marginLeft:58}}  type="text" id='fname'  onChange={(e)=>{
                    updatemethod({
                      ...products,
                      fstname:e.target.value
                    })
                    }}></input>
                    <br/>
                    <br/>

                  <label className='lableclass'  htmlFor='lname'>Last Name : </label>
                  <input placeholder='Enter Last Name' style={{marginLeft:57}} type='text' id='lname' onChange={(e)=>{
                    updatemethod({
                      ...products,
                      lstName:e.target.value
                    })
                  }}/>
                  
                  <br/>
                  <br/>
      </div>
      <div className='part2'>
                  <label className='lableclass' htmlFor='email'> Email :</label> 
                   <input placeholder='Enter Email' style={{marginLeft:92}} type='' id='email' onChange={(e)=>{
                    updatemethod({
                      ...products,
                      EmailCheck:e.target.value
                    })
                  }}/> 

                  <br/>  
                  <br/>

                  <label className='lableclass' >PhoneNumber :</label>
                   <input placeholder='Enter Phone Number' style={{marginLeft:38}} type='number' id='phNo' onChange={(e)=>{
                    updatemethod({
                      ...products,
                      phoneNumber:e.target.value
                    })
                  }}/>

                  <br/>
                  <br/>
      </div>

      <div className='part3'>
                  {/* <label className='lableclass' >collegeName :</label>
                   <input placeholder='Enter College name' style={{marginLeft:45}} type='text' id='clgname' onChange={(e)=>{
                    updatemethod({
                      ...products,
                      collegeName:e.target.value
                    })
                  }}/>

                  <br/>
                  <br/> */}

                  <label className='lableclass' >Address : </label>
                  <input placeholder='Enter the Address' style={{marginLeft:73}} type='' id='address' onChange={(e)=>{
                      updatemethod({
                        ...products,
                        address:e.target.value
                      })
                  }} />

                  <br/>
                  <br/>
      </div>
            
      <div className='part1'>
                  <label className='lableclass' >Father's Name : </label>
                  <input placeholder=" Enter Father's Name" style={{marginLeft:33}} type='text' id='fatherName' onChange={(e)=>{
                          updatemethod({
                            ...products,
                            fatherName:e.target.value
                          })
                        }}/>
                  <br/>
                  <br/>
                  <label className='lableclass' >Mother's Name : </label>
                  <input placeholder="Enter mother's name"style={{marginLeft:26}} type='text' id='motherName' onChange={(e)=>{
                    updatemethod({
                      ...products,
                      motherName:e.target.value
                    })
                  }}/>

                  <br/>
                  <br/>

                  
      </div>
                  
      <div className='part1'>
                  <label className='lableclass' >Inter/School : </label>
                  <input placeholder='Enter School Details' style={{marginLeft:45}} type='text' id='colegeName' onChange={(e)=>{
                      updatemethod({
                        ...products,
                        interclgName:e.target.value
                      })
                  }}/>

                  <br/>
                  <br/> 

                  <label className='lableclass' >CGPA/Percentage : </label>
                  <input placeholder='Enter cgpa' style={{marginLeft:10}} type='number' id='Cgpa12th' onChange={(e)=>{
                      updatemethod({
                        ...products,
                        cgpa12th:e.target.value
                      })
                  }}/>
                    
                  <br/>
                  <br/>

                  
      </div>
            
      <div className='part1'>
                <label className='lableclass' >Graduation : </label>
                <input placeholder='Enter graduation Details' style={{marginLeft:55}} type='text' id='btechClg' onChange={(e)=>{
                      updatemethod({
                        ...products,
                        btechClg:e.target.value
                      })
                  }}/>

                  <br/>
                  <br/>

                  <label className='lableclass' >CGPA/Percentage : </label>
                  <input placeholder='Enter cgpa' style={{marginLeft:10}} type='number' id='CgpaBtech' onChange={(e)=>{
                      updatemethod({
                        ...products,
                        CgpaBtech:e.target.value
                      })
                  }}/>

                  <br/>
                  <br/>

      </div>


            <br/>
      <div className='submitButton'>
                  <button style={{color:'navajowhite', backgroundColor:'navy',border:'none',width:100 ,
                  height:30,borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopRightRadius:5,
                  borderTopLeftRadius:5}} className='button'
                   onClick={
                          handlingSubmitButton
                        }>submit</button>
      </div>
   
            
    </form>
  </div>
  </>

  )
  
}
export default Regform