"use client";
import Nav from "@/app/component/nav";
import Side from "./side";
 
const TABLE_HEAD = ["ชื่อ-นามสกุล", "รหัสพนักงาน", "Project", "งานที่ทำ", "ชั่วโมง", "วันที่", "เงิน"];
const TABLE_ROWS = [
  {
    name: "John Michael",
    employNum: "111111",
    project: "PEA1",
    job: "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.",
    hours: "4",
    date: "1/1/2023",
    income: "1000",
  },
  {
    name: "Jane Smith",
    employNum: "000000",
    project: "PEA2",
    job: "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.",
    hours: "4",
    date: "1/2/2023",
    income: "1500",
  },
  {
    name: "Jane Smith",
    employNum: "999999",
    project: "PEA1",
    job: "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.",
    hours: "4",
    date: "6/6/2023",
    income: "1000",
  },
];

export default function TableD() {
    return (
    <>
    <Nav></Nav>
    <div className="flex">
    <Side></Side>
      <div className="flex flex-col w-full h-screen px-4 py-5 bg-violet-200 rounded-lg shadow">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <h2 className="text-4xl text-gray-900 text-center">OT</h2>
        <div className="inline-block min-w-full py-6 sm:px-6 lg:px-8">
            <table className="table-fixed bg-violet-100 min-w-full text-center text-sm font-medium">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                <th key={head} className="w-2 border-b bg-violet-300 border-violet-800 p-4">
                  {head}
                </th>
                  ))}
                </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, employNum, project, job, hours, date, income }) => (
                <tr key={name} className="border-2 border-y-violet-400 hover:bg-violet-200">
                  <td className="p-4">
                    <a href="/detail">{name}</a>
                    
                  </td>
                  <td className="p-4">
                    {employNum}
                  </td>
                  <td className="p-4">
                    {project}
                  </td>
                  <td className="p-4">
                    {job}
                  </td>
                  <td className="p-4">
                    {hours}
                  </td>
                  <td className="p-4"> 
                    {date}
                  </td>
                  <td className="p-4">
                    {income}
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div></> 
  )}