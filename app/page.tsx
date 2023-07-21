"use client";
import Signin from "@/app/component/signin";


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'OT', href: '/', current: false },
  
]

function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Signin></Signin>
  )
}
