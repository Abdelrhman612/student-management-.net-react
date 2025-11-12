import axios from "axios"
import type { SignInDto, SignUpDto } from "../../types/auth"
import { SignInUrl, SignUpUrl } from "../api"


export const SignUpService = async ({name, email, password} : SignUpDto)=>{
   const res = await axios.post(SignUpUrl ,{ name, email, password })
   return res.data;
}

export const  SignInService = async ({email, password} : SignInDto )=>{
  const res = await axios.post(SignInUrl, { email, password })
  const token = res.data.Token;
  localStorage.setItem('token', token);
  return {token };
}