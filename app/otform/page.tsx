"use client";
import Link from 'next/link'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import Nav from "@/app/component/nav";
import Side from '../component/side';

export default function Form() {
  return (
    <>
    <Nav></Nav>
    <div className="flex">
    <Side></Side>
    <div className="flex flex-col w-full px-4 py-5 bg-white rounded-lg shadow">
        <div className="bg-violet-200 h-screen">
          <div className="mx-auto max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-6 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
    
      <form>

        <div className=" border-gray-900/10 pb-12">
          <h2 className="text-base text-4xl leading-7 text-gray-900">OT form</h2>


          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-m font-medium leading-6 text-gray-900">
                ชื่อ-นามสกุล
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder='ชื่อ-นามสกุล'
                  className="bg-violet-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-m font-medium leading-6 text-gray-900">
                รหัสพนักงาน
              </label>
              <div className="mt-2">
                <input
                  id="empnumber"
                  name="empnumber"
                  type="text"
                  placeholder='รหัสพนักงาน'
                  className="bg-violet-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-m font-medium leading-6 text-gray-900">
                Project
              </label>
              <div className="mt-2">
                <select
                  id="project"
                  name="project"
                  className="bg-violet-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>PEA1</option>
                  <option>PEA2</option>
                  <option>PEA3</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-m font-medium leading-6 text-gray-900">
                งาน
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="job"
                  id="job"
                  placeholder='งานที่ทำ'
                  className="bg-violet-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-m font-medium leading-6 text-gray-900">
                ชั่วโมง
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="hour"
                  id="hour"
                  className="bg-violet-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-m font-medium leading-6 text-gray-900">
                วันที่
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="job"
                  id="job"
                  placeholder='งานที่ทำ'
                  className="bg-violet-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>


        <div className="col-span-full">
          <label className="block text-m font-medium leading-6 text-gray-900">
            คำอธิบาย
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              placeholder='อธิบาย'
              className=" bg-violet-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={''} />
          </div>
          <p className="mt-3 text-m leading-6 text-gray-600">Describe something</p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href='/'
            className="rounded-md bg-purple-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </a>

        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
