
export function Display ({fstname,lstName,EmailCheck,phoneNumber,address,fatherName,
    motherName,interclgName,cgpa12th,btechClg,CgpaBtech})
{
    console.log(`The Registration Form DATA of ${fstname}${lstName}`)
    console.log(fstname)
    console.log(lstName)
    console.log(EmailCheck)
    console.log(phoneNumber)
    console.log(address)
    console.log(fatherName)
    console.log(motherName)
    console.log(interclgName)
    console.log(cgpa12th)
    console.log(btechClg)
    console.log(CgpaBtech)
    
}

function PopupMsg({fstname,lstName}){
    alert(`Regisration is done ${fstname} ${lstName}`)
}
 export default PopupMsg

 // for props 
// export function Display (props)
// {
//     console.log("The Form DATA is below")
//     console.log(props.fstname)
//     console.log(props.lstName)
//     console.log(props.EmailCheck)
//     console.log(props.collegeName)
// }

// function Form({fstname,lstName}){
//     alert(`Regisration is done ${fstname} ${lstName}`)
// }
//  export default Form