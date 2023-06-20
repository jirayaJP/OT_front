"use client";
import Head from "@/app/component/head";
import Form from "@/app/otform/page";
import Detail from "@/app/detail/page";
import TableD from "@/app/component/table";
import Link from "next/link";
import Router from "next/router";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'OT', href: '/', current: false },
  
]

function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <><Head></Head>
    
      <TableD></TableD>
      
    </>
  )
}
