"use client";
import React from "react";
import { Button, Table } from "flowbite-react";

const JoinUs = () => {
  return (
    <div>
      <div className="px-10 py-5 lg:px-80 font-bold text-2xl lg:text-4xl text-start dark:text-white">
        <div>
          <span>Come, Start your Journey with Us</span>
        </div>
        <div className="py-5 lg:pr-[400px] ">
          <Table hoverable className="bg-[#FFFADD] rounded-xl">
            <Table.Head>
              <Table.HeadCell className="bg-[#FFF6BD]">Roles</Table.HeadCell>
              <Table.HeadCell className="bg-[#FFF6BD]">Location</Table.HeadCell>
              <Table.HeadCell className="bg-[#FFF6BD]">
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className=" hover:bg-[#FFEECC] font-medium text-gray-900">
                <Table.Cell className="whitespace-nowrap">Role 1</Table.Cell>
                <Table.Cell className="">Location 1</Table.Cell>
                <Table.Cell>
                  <Button
                    color=""
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Apply
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-[##FFFADD] hover:bg-[#FFEECC] font-medium text-gray-900">
                <Table.Cell className="whitespace-nowrap ">
                  <p>Role 2</p>
                </Table.Cell>
                <Table.Cell>Location 2</Table.Cell>
                <Table.Cell>
                  <Button
                    color=""
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Apply
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-[##FFFADD] hover:bg-[#FFEECC] font-medium text-gray-900">
                <Table.Cell className="whitespace-nowrap">Role 3</Table.Cell>
                <Table.Cell>Location 3</Table.Cell>
                <Table.Cell>
                  <Button
                    color=""
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Apply
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
