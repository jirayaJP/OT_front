"use client";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import Head from "@/app/component/head";

export default function Detail() {
  return (
    <><Head></Head>
    <div className='bg-violet-200'>
    <div className="mx-auto max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      
        <h2 className="text-4xl text-gray-900">Information</h2>
        <dl className="divide-y divide-violet-500">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">ชื่อ-นามสกุล</dt>
            <dd className="mt-1 text-m leading-6 text-gray-800 sm:col-span-2 sm:mt-0">ABC DEF</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">รหัสพนักงาน</dt>
            <dd className="mt-1 text-m leading-6 text-gray-800 sm:col-span-2 sm:mt-0">000000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">Project</dt>
            <dd className="mt-1 text-m leading-6 text-gray-800 sm:col-span-2 sm:mt-0">PEA1</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">ชั่วโมง</dt>
            <dd className="mt-1 text-m leading-6 text-gray-800 sm:col-span-2 sm:mt-0">4</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">วันที่</dt>
            <dd className="mt-1 text-m leading-6 text-gray-800 sm:col-span-2 sm:mt-0">1/1/1111</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">จำนวนเงิน</dt>
            <dd className="mt-1 text-m leading-6 text-gray-800 sm:col-span-2 sm:mt-0">1000 </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">คำอธิบาย</dt>
            <dd className="mt-1 text-m leading-6 text-gray-800 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-m font-medium leading-6 text-gray-900">เอกสาร</dt>
            <dd className="mt-2 text-m text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-violet-500 rounded-md border border-violet-500">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-violet-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate text-m font-medium">OT.pdf</span>
                      <span className="flex-shrink-0 text-violet-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-violet-600 hover:text-violet-500">
                      Download
                    </a>
                  </div>
                </li>

              </ul>
            </dd>
          </div>
        </dl>
      
    </div>
    </div></>
  )
}
