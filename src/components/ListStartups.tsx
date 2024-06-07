import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Companies from "../compannies.json";
const ListStartups = () => {
  return (


    <table className="overflow-x-auto">
      <thead>
        <tr>
          <th>STARTUP ID</th>
          <th>STARTUP NAME</th>
          <th>HOST COMPANY NAME</th>
          <th>PLACE</th>
          <th>HALL</th>
          <th>DAYS OF PRESENCE</th>
          <th>DESCRIPTION</th>
          <th>WEBSITE</th>
          <th className="w-40">FACEBOOK</th>
          <th>LINKEDIN</th>
          <th>TWITTER</th>
          <th>LOGO</th>
          <th className="w-40">PRESENTATION VIDEO</th>
          <th className="w-40">INSTAGRAM</th>
          <th>YOUTUBE</th>
          <th>BUSINESS SECTOR</th>
          <th>INTERESTS</th>
          <th>ZIP CODE</th>
          <th>COUNTRY</th>
          <th>LOOKING FOR</th>
          <th>SU CONTACT FIRST NAME</th>
          <th>SU CONTACT LAST NAME</th>
          <th>SU CONTACT PHONE</th>
          <th>SU_CEO CONTACT FIRST NAME</th>
          <th>SU_CEO CONTACT LAST NAME</th>
          <th>SU_CEO CONTACT EMAIL</th>
          <th>SU_CITY</th>
          <th>YEAR_OF_CREATION_OF_THE_COMPANY</th>
          <th>SU TEAM MEMBER</th>
          <th>SU_DEVELOPMENT_STAGE</th>
          <th>FUNDRAISING AMOUNT</th>
          <th>SU ROUNDS OF FUNDRAISING COMPLETED</th>
          <th>SU CURRENTLY RAISING FUNDS</th>
          <th>SU NEXT FUNDING ROUND (EUR)</th>
          <th>SU EXPECTED NUMBER OF RECRUITMENTS FOR THE NEXT 12 MONTHS</th>
          <th>SU BUSINESS TARGET</th>
          <th>SU BUSINESS MODEL</th>
          <th>SU BUSINESS TYPE</th>
          <th>SU TECHNOLOGIES EMPLOYED</th>
          <th>SU DIRECT COMPETITORS</th>
          <th>LAST MODIFICATION</th>
          <th>PITCH DECK</th>
        </tr>
      </thead>
      <tbody>
        {Companies.companies.map((company: any) => (
          <tr>
            <td>
              <p className="text-sm ">
                {company.cellValuesByColumnId.fldNQSQCtbyTp7Vo1}
              </p>
            </td>
            <td>
              <>{company.cellValuesByColumnId.fldVszoQrD4uqIN7x}</>
            </td>
            <td>
              <p className="text-sm ">
                {
                  company.cellValuesByColumnId.fldJdFZ4MAHwAwkVF
                    ?.valuesByForeignRowId.recieCOTMA8Qv7NrM
                }
              </p>
            </td>
            <td>
              <p className="text-sm ">
                {company.cellValuesByColumnId.fldGttbJ2kqS8IKav}
              </p>
            </td>
            <td>
              <h1 className="font-medium">hall 1</h1>
            </td>
            <td>
              <p className="text-sm">
                {company.cellValuesByColumnId.fldue3JJD9aEEEAsH}
              </p>
            </td>
            <td>
              <p className="text-sm">
                {company.cellValuesByColumnId.fldcZUAG4Ippah21c}
              </p>
            </td>
            <td className="w-40">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldhcmQ3lzZL3Zad0}
              </p>
            </td>
            <td className="w-40">
              <p className="text-sm">
                {company.cellValuesByColumnId.fld9YkUY3oVOv4qxl}
              </p>
            </td>
            {/* LINKEDIN */}
            <td>
              <p className="text-sm">
                {company.cellValuesByColumnId.fldrRAdBTsFQ02Hj4}
              </p>
            </td>
            {/* TWITTER */}

            <td>
              <p className="text-sm">
                {company.cellValuesByColumnId.flduBynFcGQoagFzO}
              </p>
            </td>
            {/* LOGO */}
            <td>
              <p className="text-sm">
                {company.cellValuesByColumnId.fldeyDU8YJMxN5pcA}
              </p>
            </td>
            {/* PRESENTATION VIDEO */}
            <td className="w-40">
              <p className="text-sm">
                {company.cellValuesByColumnId.fld1RBjoqArS3J3LY}
              </p>
            </td>
            {/* INSTAGRAM  */}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldUlVOv6BrmaLrrt}
              </p>
            </td>
            {/* YOUTUBE  */}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fld5EHOcenu4ShIEG}
              </p>
            </td>
            {/* BUSINESS SECTOR  */}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fld3VJr8Gqy4fBrl4}
              </p>
            </td>
            {/* INTERESTS  */}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.flde1Gb5xTCFzi6Sy}
              </p>
            </td>
            {/* zipcode */}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldXQWXXWyXD2i9pH}
              </p>
            </td>
            {/* country */}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldnBXHuSNtOndFyc}
              </p>
            </td>
            {/* LOOKING FOR */}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldVUyUhwHundC7Jh}
              </p>
            </td>
            {/* CONTACT FIRST NAME */}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldPKjsQuSSHRUnTw}
              </p>
            </td>
            {/* CONTACT LAST NAME */}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fld9MOGu7MVaP609w}
              </p>
            </td>
            {/* CONTACT PHONE*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldw6BMolhUf89qa2}
              </p>
            </td>
            {/* CONTACT FIRST NAME*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldo5bIr0FPbaWht8}
              </p>
            </td>
            {/*CEO CONTACT LAST NAME*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldiM9YRqQdcAw3Yo}
              </p>
            </td>
            {/* CEO CONTACT LAST NAME*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldsolCfY1egg2bLu}
              </p>
            </td>
            {/* SU CITY*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldqCGOQmNq2qioMG}
              </p>
            </td>
            {/* YEAR CREATION*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldKGttsYAcXh72vc}
              </p>
            </td>
            {/* SU TEAM MEMBER*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldINMm8j3xaPDh1t}
              </p>
            </td>
            {/* SU_DEVELOPMENT_STAGE*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldqaCTZGrifxKDTl}
              </p>
            </td>
            {/* FUNDRAISING AMOUNT*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldDGtvqQLB6b5QlX}
              </p>
            </td>
            {/* SU ROUNDS OF FUNDRAISING COMPLETED*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.flduPWFTpeecUOJIo}
              </p>
            </td>
            {/* SU CURRENTLY RAISING FUNDS*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldCBS1LkUKLGtwhD}
              </p>
            </td>
            {/* SU NEXT FUNDING ROUND (EUR)*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldGCF3DwcNrUbcjP}
              </p>
            </td>
            {/* SU EXPECTED NUMBER OF RECRUITMENTS FOR THE NEXT 12 MONTHS*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldnL5FhYjin0OSo1}
              </p>
            </td>
            {/* SU BUSINESS TARGET*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldko8ouHvjI5GPUN}
              </p>
            </td>
            {/* SU BUSINESS MODEL*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldVfKeshf3YSvowa}
              </p>
            </td>
            {/* SU BUSINESS TYPE*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldyaPQfPktaPXzzQ}
              </p>
            </td>
            {/* SU TECHNOLOGIES EMPLOYED*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldnOuOR5VsZKqrWR}
              </p>
            </td>
            {/* SU DIRECT COMPETITORS*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldU18zbpvdYy0Ws9}
              </p>
            </td>
            {/* LAST MODIFICATION*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.fldjr8W6CqhLNGUPo}
              </p>
            </td>
            {/* PITCH DECK*/}
            <td className="w-20">
              <p className="text-sm">
                {company.cellValuesByColumnId.flduuZxq4vmrAPjtK}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListStartups;
