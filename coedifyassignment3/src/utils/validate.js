export default function validate(formElement){
    let returnObj = checkRequired(formElement);
    if(returnObj.flag === false)
        return returnObj;    
}

function checkLength(formElement){
    
}

function checkRequired(formElement){
    let returnObj = {flag: false, message: "Cannot be Empty"}
    if(formElement.required === true){
        if((formElement.value!=="")&&(formElement.value!==null)&&(formElement.value!==undefined))
            returnObj = {flag: true, message: ""}
    }else{
        returnObj = {flag: true, message: ""}
    }
    return returnObj;
}