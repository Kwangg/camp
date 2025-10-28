'use client'

import { Button } from "@/components/ui/button"
import React,{useState} from "react"

const RegisterPage = () => {
  return (
    <div className="container mx-auto">
        <form action="">
            <input className="block bg-gray-300 p-2 my-2 rounded-md" type="text" placeholder='Enter your name'/>
            <input className="block bg-gray-300 p-2 my-2 rounded-md" type="email" placeholder='Enter your email'/>
            <input className="block bg-gray-300 p-2 my-2 rounded-md" type="password" placeholder='Enter your password'/>
            <Button type="submit" className="bg-green-500 p-2 rounded-md text-white">Sign up</Button>
        </form>
    </div>
  )
}
export default RegisterPage