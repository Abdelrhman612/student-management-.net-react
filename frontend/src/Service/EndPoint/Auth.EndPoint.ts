import axios from "axios"
import type { SignInDto, SignUpDto } from "../../types/auth"
import { SignInUrl, SignUpUrl } from "../api"


export const SignUp = async ({name, email, password} : SignUpDto)=>{
   const res = await axios.post(SignUpUrl ,{ name, email, password })
   return res;
}

export const  SignIn = async ({email, password, role} : SignInDto )=>{
  const res = await axios.post(SignInUrl, { email, password, role })
  const token = res.data.Token;
  localStorage.setItem('token', token);
  localStorage.setItem('userRole', role)
  return {token , role};
}