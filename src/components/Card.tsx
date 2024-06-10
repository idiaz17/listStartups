import React, { useState } from "react";
import Companies from "../compannies.json";
import Countries from "../countries.json";
import City from "../city.json";
import { TbWorldWww } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

//@ts-ignore
import nologo from "../assets/No_Logo.png";

interface Country {
  id: string;
  name: string;
  color: string;
}

interface Countries {
  countries: {
    [key: string]: Country;
  };
}

interface City {
  id: string;
  name: string;
  color: string;
}

interface Cities {
  city: {
    [key: string]: City;
  };
}

const countriesData: Countries = Countries;
const citiesData: Cities = City;

export const Card = ({ company }: any) => {
  const isEmpty = (value: string) => !value || value.trim() === "";

  const nodesc = "No description available";
  const [expanded, setExpanded] = useState(false);

  // Function to get country name by ID
  const getCountryName = (id: string) => {
    const country = countriesData.countries[id];
    return country ? country.name : id;
  };
  const getCityyName = (id: string) => {
    const city = citiesData.city[id];
    return city ? city.name : id;
  };

  return (
    <div className="bg-slate-200  max-w-[500px] rounded-3xl p-8 mb-4 shadow-lg">
      <div className=" flex justify-center align-middle items-center gap-4 pb-8">
        <img
          src={company.cellValuesByColumnId.fldeyDU8YJMxN5pcA || nologo}
          className="w-[100px]"
          alt={company.cellValuesByColumnId.fldVszoQrD4uqIN7x}
        />{" "}
        <div>
          <p className="text-2xl">
            <strong> {company.cellValuesByColumnId.fldVszoQrD4uqIN7x}</strong>{" "}
          </p>
          <p className="text-xl text-center text-slate-600">
            <strong>
              {" "}
              {
                company.cellValuesByColumnId.fldJdFZ4MAHwAwkVF
                  ?.valuesByForeignRowId.recieCOTMA8Qv7NrM
              }
            </strong>{" "}
          </p>
        </div>
      </div>
      <div className="pb-8 ">
        <div className="bg-white rounded-2xl p-4">
          <p className="text-sm">
            {company.cellValuesByColumnId.fldcZUAG4Ippah21c || nodesc}
          </p>
          {expanded && (
            <div>
              <p className="text-sm">
                <strong>INTERESTS:</strong>{" "}
                {company.cellValuesByColumnId.flde1Gb5xTCFzi6Sy}
              </p>
              <p className="text-sm">
                <strong>LOOKING FOR:</strong>{" "}
                {company.cellValuesByColumnId.fldVUyUhwHundC7Jh}
              </p>
              <p className="text-sm">
                <strong>TECHNOLOGIES EMPLOYED:</strong>{" "}
                {company.cellValuesByColumnId.fldnOuOR5VsZKqrWR || "No info"}
              </p>
              <p className="text-sm">
                <strong>RAISING FUNDS? :</strong>{" "}
                {company.cellValuesByColumnId.fldCBS1LkUKLGtwhD
                  ? "Yes"
                  : "No info"}
              </p>
              <p className="text-sm">
                <strong>FUNDRAISING AMOUNT :</strong>{" "}
                {company.cellValuesByColumnId.fldDGtvqQLB6b5QlX}
              </p>
              <p className="text-sm">
                <strong>NEXT FUNDING ROUND:</strong>{" "}
                {company.cellValuesByColumnId.fldGCF3DwcNrUbcjP + "€"}
              </p>
              <p className="text-sm">
                <strong>EXPECTED RECRUITMENTS NEXT YEAR :</strong>{" "}
                {company.cellValuesByColumnId.fldnL5FhYjin0OSo1}
              </p>

              <p className="text-sm">
                <strong>DIRECT COMPETITORS:</strong>{" "}
                {company.cellValuesByColumnId.fldU18zbpvdYy0Ws9}
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="text-md bg-blue-500 text-white px-4  h-10 rounded-full flex justify-center mt-2 items-center shadow-lg"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "- Read less" : "+ Read more"}
          </button>
        </div>
      </div>
      <div className="pb-8">
      <div className="bg-white rounded-2xl p-4">

        <div className="flex pb-2 gap-2 items-center">
          <FaMapLocationDot size={30} />
          {!isEmpty(company.cellValuesByColumnId.fldXQWXXWyXD2i9pH) && (
            <p className="text-sm">
              {company.cellValuesByColumnId.fldXQWXXWyXD2i9pH}
              {!isEmpty(company.cellValuesByColumnId.fldqCGOQmNq2qioMG) && ","}
            </p>
          )}
          {!isEmpty(company.cellValuesByColumnId.fldqCGOQmNq2qioMG) && (
            <p className="text-sm">
              {getCityyName(company.cellValuesByColumnId.fldqCGOQmNq2qioMG)}
              {!isEmpty(company.cellValuesByColumnId.fldnBXHuSNtOndFyc) && ","}
            </p>
          )}
          {!isEmpty(company.cellValuesByColumnId.fldnBXHuSNtOndFyc) && (
            <p className="text-sm">
              <strong>
                {getCountryName(company.cellValuesByColumnId.fldnBXHuSNtOndFyc)}
              </strong>
            </p>
          )}
        </div>
        <div className="flex pb-2 gap-2 items-center">
          <IoPerson size={30} />{" "}
          <p className="text-sm">
            {company.cellValuesByColumnId.fldPKjsQuSSHRUnTw}
          </p>
          <p className="text-sm">
            {company.cellValuesByColumnId.fld9MOGu7MVaP609w}
          </p>
        </div>
        <div className="flex pb-2 gap-2 items-center">
          <FaPhone size={30} />{" "}
          <p className="text-sm">
            {company.cellValuesByColumnId.fldw6BMolhUf89qa2}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <IoIosMail size={30} />{" "}
          <p className="text-sm">
            {company.cellValuesByColumnId.fldsolCfY1egg2bLu}
          </p>
        </div>
        </div>
        <div className="flex justify-center">
          <a
            href={`https://${company.cellValuesByColumnId.flduuZxq4vmrAPjtK?.replace(
              "https://",
              ""
            )}`}
            target="_blank"
            className={`text-sm ${
              !company.cellValuesByColumnId.flduuZxq4vmrAPjtK &&
              "cursor-not-allowed text-gray-400"
            }`}
            onClick={(e) => {
              if (!company.cellValuesByColumnId.flduuZxq4vmrAPjtK) {
                e.preventDefault(); // Prevenir el comportamiento predeterminado
              }
            }}
          >
            <button
              className={`text-md h-10 px-4 mt-2 rounded-full flex justify-center items-center shadow-lg ${
                company.cellValuesByColumnId.flduuZxq4vmrAPjtK
                  ? "bg-blue-500 text-white"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
              disabled={!company.cellValuesByColumnId.flduuZxq4vmrAPjtK}
            >
              View pitch deck
            </button>
          </a>
        </div>
      </div>
      <div className="flex gap-2 justify-evenly">
        <a
          href={`https://${company.cellValuesByColumnId.fldhcmQ3lzZL3Zad0?.replace(
            "https://",
            ""
          )}`}
          target="_blank"
          className={`text-sm ${
            !company.cellValuesByColumnId.fldhcmQ3lzZL3Zad0 &&
            "cursor-not-allowed text-gray-400"
          }`}
          onClick={(e) => {
            if (!company.cellValuesByColumnId.fldhcmQ3lzZL3Zad0) {
              e.preventDefault(); // Prevenir el comportamiento predeterminado
            }
          }}
        >
          <TbWorldWww size={40} />
        </a>
        <a
          href={`https://${company.cellValuesByColumnId.fld9YkUY3oVOv4qxl?.replace(
            "https://",
            ""
          )}`}
          target="_blank"
          className={`text-sm ${
            !company.cellValuesByColumnId.fld9YkUY3oVOv4qxl &&
            "cursor-not-allowed text-gray-400"
          }`}
          onClick={(e) => {
            if (!company.cellValuesByColumnId.fld9YkUY3oVOv4qxl) {
              e.preventDefault(); // Prevenir el comportamiento predeterminado
            }
          }}
        >
          <FaFacebookSquare size={40} />
        </a>
        <a
          href={`https://${company.cellValuesByColumnId.fld5EHOcenu4ShIEG?.replace(
            "https://",
            ""
          )}`}
          target="_blank"
          className={`text-sm ${
            !company.cellValuesByColumnId.fld5EHOcenu4ShIEG &&
            "cursor-not-allowed text-gray-400"
          }`}
          onClick={(e) => {
            if (!company.cellValuesByColumnId.fld5EHOcenu4ShIEG) {
              e.preventDefault(); // Prevenir el comportamiento predeterminado
            }
          }}
        >
          <FaYoutubeSquare size={40} />
        </a>
        <a
          href={`https://${company.cellValuesByColumnId.fldrRAdBTsFQ02Hj4?.replace(
            "https://",
            ""
          )}`}
          target="_blank"
          className={`text-sm ${
            !company.cellValuesByColumnId.fldrRAdBTsFQ02Hj4 &&
            "cursor-not-allowed text-gray-400"
          }`}
          onClick={(e) => {
            if (!company.cellValuesByColumnId.fldrRAdBTsFQ02Hj4) {
              e.preventDefault(); // Prevenir el comportamiento predeterminado
            }
          }}
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href={`https://${company.cellValuesByColumnId.flduBynFcGQoagFzO?.replace(
            "https://",
            ""
          )}`}
          target="_blank"
          className={`text-sm ${
            !company.cellValuesByColumnId.flduBynFcGQoagFzO &&
            "cursor-not-allowed text-gray-400"
          }`}
          onClick={(e) => {
            if (!company.cellValuesByColumnId.flduBynFcGQoagFzO) {
              e.preventDefault(); // Prevenir el comportamiento predeterminado
            }
          }}
        >
          <FaSquareXTwitter size={40} />
        </a>
        <a
          href={`https://${company.cellValuesByColumnId.fldUlVOv6BrmaLrrt?.replace(
            "https://",
            ""
          )}`}
          target="_blank"
          className={`text-sm ${
            !company.cellValuesByColumnId.fldUlVOv6BrmaLrrt &&
            "cursor-not-allowed text-gray-400"
          }`}
          onClick={(e) => {
            if (!company.cellValuesByColumnId.fldUlVOv6BrmaLrrt) {
              e.preventDefault(); // Prevenir el comportamiento predeterminado
            }
          }}
        >
          <FaInstagramSquare color="" size={40} />
        </a>
      </div>
    </div>
  );
};
