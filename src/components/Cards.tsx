import React, { useState } from "react";
import Companies from "../compannies.json";
import { Card } from "./Card";
import { FaSearch } from "react-icons/fa";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const filteredCompanies = Companies.companies.filter((company: any) =>
    company.cellValuesByColumnId.fldVszoQrD4uqIN7x
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const filteredCompaniesWithWebsite = filteredCompanies.filter(
    (company: any) => company.cellValuesByColumnId.fldhcmQ3lzZL3Zad0
  );

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const totalPagesWithWebsite = Math.ceil(filteredCompaniesWithWebsite.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentCompanies = filteredCompanies.slice(startIndex, endIndex);
  const currentCompaniesWithWebsite = filteredCompaniesWithWebsite.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePageChangeWithWebsite = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPagesWithWebsite) {
      setCurrentPage(newPage);
    }
  };

  const [value, setValue] = useState('1');
  const handleChange2 = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <TabContext value={value}>
        <TabList onChange={handleChange2} aria-label="lab API tabs example">
          <Tab label="ALL COMPANIES" value="1" />
          <Tab label="VERIFIED COMPANIES" value="2" />
        </TabList>

        <TabPanel value="1">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="mb-4 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            {currentCompanies.map((company: any, index: number) => (
              <Card company={company} key={index} />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </TabPanel>

        <TabPanel value="2">
        <div className="flex justify-center">
        <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="mb-4 p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            {currentCompaniesWithWebsite.map((company: any, index: number) => (
              <Card company={company} key={index} />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChangeWithWebsite(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPagesWithWebsite}`}</span>
            <button
              onClick={() => handlePageChangeWithWebsite(currentPage + 1)}
              disabled={currentPage === totalPagesWithWebsite}
              className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};
