import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function attempts_Number(result){
    return result.filter(r=>r !== undefined).length;
}

export function earnPoints_Number(result,answers,point){
    return result.map((element,i)=>answers[i]===element).filter((element)=>element).map(i=>point).reduce((prev,curr)=>prev+curr,0);
}

export function flagResult(totalPoints,earnPoints){
    return (totalPoints/2)<earnPoints;
}

export function CheckUserExist({children}){
    const auth=useSelector(state=>state.result.userId);
    return auth?children:<Navigate to={'/'} replace={true}></Navigate>
}