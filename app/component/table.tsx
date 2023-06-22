"use client";
import Head from "@/app/component/head";
export default function TableD() {
    return (
      
      
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="bg-violet-200 h-screen">
          <div className="mx-auto max-w-2xl items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-6 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className=" bg-violet-100 min-w-full text-center text-sm font-medium">
                    <thead className="border-b border-neutral-700 bg-purple-800 text-neutral-50 dark:border-neutral-600 ">
                      <tr>
                        <th scope="col" className="px-6 py-4">ชื่อ-นามสกุล</th>
                        <th scope="col" className="px-6 py-4">รหัสพนักงาน</th>
                        <th scope="col" className="px-6 py-4">Project</th>
                        <th scope="col" className="px-6 py-4">งาน</th>
                        <th scope="col" className="px-6 py-4">ชั่วโมง</th>
                        <th scope="col" className="px-6 py-4">วันที่</th>
                        <th scope="col" className="px-6 py-4">เงิน</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4"><a href="/detail">ABC DEF</a></td>
                        <td className="whitespace-nowrap px-6 py-4">000000</td>
                        <td className="whitespace-nowrap px-6 py-4">PEA1</td>
                        <td className="whitespace-nowrap px-6 py-4">edit</td>
                        <td className="whitespace-nowrap px-6 py-4">4</td>
                        <td className="whitespace-nowrap px-6 py-4">1/1/1111</td>
                        <td className="whitespace-nowrap px-6 py-4">1000</td>

                      </tr>
                      <tr
                        className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4"><a href="/detail">ABC DEF</a></td>
                        <td className="whitespace-nowrap px-6 py-4">000000</td>
                        <td className="whitespace-nowrap px-6 py-4">PEA1</td>
                        <td className="whitespace-nowrap px-6 py-4">edit</td>
                        <td className="whitespace-nowrap px-6 py-4">4</td>
                        <td className="whitespace-nowrap px-6 py-4">1/1/1111</td>
                        <td className="whitespace-nowrap px-6 py-4">1000</td>
                      </tr>

                      <tr
                        className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4"><a href="/detail">ABC DEF</a></td>
                        <td className="whitespace-nowrap px-6 py-4">000000</td>
                        <td className="whitespace-nowrap px-6 py-4">PEA1</td>
                        <td className="whitespace-nowrap px-6 py-4">edit</td>
                        <td className="whitespace-nowrap px-6 py-4">4</td>
                        <td className="whitespace-nowrap px-6 py-4">1/1/1111</td>
                        <td className="whitespace-nowrap px-6 py-4">1000</td>
                      </tr>

                      <tr
                        className="border-b border-primary-200 bg-primary-100 text-neutral-800">
                        <td className="whitespace-nowrap px-6 py-4"><a href="/detail">ABC DEF</a></td>
                        <td className="whitespace-nowrap px-6 py-4">000000</td>
                        <td className="whitespace-nowrap px-6 py-4">PEA1</td>
                        <td className="whitespace-nowrap px-6 py-4">edit</td>
                        <td className="whitespace-nowrap px-6 py-4">4</td>
                        <td className="whitespace-nowrap px-6 py-4">1/1/1111</td>
                        <td className="whitespace-nowrap px-6 py-4">1000</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
          
        
      
      
    )}