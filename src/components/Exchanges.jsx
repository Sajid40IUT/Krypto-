import React, { useState } from 'react';

import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { Select, Col, Avatar } from 'antd';
import icon from '../images/cryptocurrency.png';
import { useGetCryptosQuery } from '../services/cryptoApi';
import LoaderE from "./LoaderE";
import "./table.css"
import datar from "./mock-data.json"

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Exchanges = ({ simplified }) => {

  const handleSubmit = () => {
    
  }

  const [contacts, setcontacts] = useState(datar);

  const { data } = useGetCryptosQuery(100);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl boxBG ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={`boxBG ${companyCommonStyles}`}>Security</div>
            <div className={`sm:rounded-tr-2xl boxBG ${companyCommonStyles}`}>
              Krypto
            </div>
            <div className={`sm:rounded-bl-2xl boxBG ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={`boxBG ${companyCommonStyles}`}>Low Fees</div>
            <div className={`rounded-br-2xl boxBG ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <Avatar src={icon} size="large" />
                </div>  
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  Address
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Krypto
                </p>
              </div>
            </div>
          </div>

          <div className="app-container sm:rounded-tr-2xl" >
            <table>
              <thead>
                <tr>
                  <th>CryptoCurrency</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {contacts.map((contact) => (
                  <tr>
                    <td>{contact.CryptoCurrency}</td>
                    <td>{contact.Amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <Input className="text-white" placeholder="Address To" name="addressTo" type="text" handleChange={() => {}} />
          {!simplified && (
            <Col span={24} className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism">
              <Select
                showSearch
                
                placeholder="Select a Crypto"
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
              </Select>
            </Col>
          )}
          <Input placeholder="Amount" name="amount" type="number" handleChange={() => {}} />
          <Input placeholder="Enter Message" name="message" type="text" handleChange={() => {}}  />

          <div className="h-[3px] w-full bg-blue-400 my-2" /> 

          {false ? (
              <LoaderE />
            ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
                )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchanges;