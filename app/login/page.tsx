'use client'

import { Button } from "@/components/ui/button"
import React,{useState} from "react"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className="container mx-auto">
        <form action="">
            <input className="block bg-gray-300 p-2 my-2 rounded-md" type="text" placeholder='Enter your name'/>
            <input className="block bg-gray-300 p-2 my-2 rounded-md" type="email" placeholder='Enter your email'/>
            <input className="block bg-gray-300 p-2 my-2 rounded-md" type="password" placeholder='Enter your password'/>
            <Button type="submit" className="bg-green-500 p-2 rounded-md text-white">Sign in</Button>
        </form>
        <hr className="my-3"/>
        <p>Already have an account? go to <Link className="" href="/register">Register</Link> Page</p>
    </div>
  )
}
export default LoginPage