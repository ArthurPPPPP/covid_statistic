import React from "react";
import { TableHeader } from "../TableHeader/TableHeader";
import {TableItem} from '../TableItem/TableItem'
export const Table = ({ data, modalContent, setModalActive, sort }) => {
  return (
    <table>
      
      <TableHeader sort={sort} />
      <tbody>
        {data.map((n, index) => (
          <TableItem
            setModalActive={setModalActive}
            countryInfo={n}
            countryNumber={index + 1}
            key={n.ID}
            modalContent={modalContent}
          />
        ))}
      </tbody>
    </table>
  );
};
