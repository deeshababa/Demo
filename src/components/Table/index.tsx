import {
  faSortAmountDesc,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  Column,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import styled from "styled-components";
import { AppColors } from "../../lib/constant";
import {
  HeaderGroup,
  orderData,
  orderListColumnProps,
  Row,
  useTableProps,
} from "../../lib/types";
import NoData from "../NoData";

interface TableProps {
  columns: Array<orderListColumnProps>;
  data: Array<orderData>;
  filterValue: string;
  filterBy?: Array<String>;
  isGlobalFilter: boolean;
  filterType: "or";
  pageSize: number;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  filterValue,
  filterBy = undefined,
  isGlobalFilter = true,
  filterType,
  pageSize,
}) => {
  let updatedColumns: ReadonlyArray<Column> = [];
  updatedColumns = useMemo(() => {
    if (filterType == "or") {
      columns.map((column) => {
        if (!filterBy?.includes(column.accessor)) {
          column.disableGlobalFilter = true;
          return column;
        }
      });
    }
    return columns;
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page = [],
    rows,
    prepareRow,
    setFilter = () => {},
    setAllFilters = () => {},
    setGlobalFilter = () => {},
    canPreviousPage = false,
    canNextPage = false,
    nextPage = () => {},
    pageOptions = [],
    previousPage = () => {},
    setPageSize = () => {},
    state: { pageIndex = 0 },
  }: useTableProps = useTable(
    {
      columns: updatedColumns,
      data: data,
    },

    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setPageSize(pageSize);
    if (filterType != "or" && filterBy && filterBy?.length > 0) {
      let filteredList: { id: String; value: string }[] = [];
      filterBy?.map((filter) => {
        filteredList.push({ id: filter, value: filterValue });
      });
      setAllFilters(filteredList);
    }

    if (
      (filterValue && !filterBy) ||
      isGlobalFilter ||
      (filterBy && filterBy?.length > 0)
    ) {
      setGlobalFilter(filterValue || undefined);
    }

    if (filterValue && filterBy && !isGlobalFilter && !filterBy.length) {
      setFilter(filterBy[0] || filterBy, filterValue);
    }
  }, [filterValue]);

  return (
    <TableContainer>
      {rows.length > 0 ? (
        <>
          <TableOuterContainer>
            <TableComp {...getTableProps()}>
              <TableHead>
                {headerGroups.map((headerGroup: any) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any) => (
                      <TableHeader>
                        {column.render("Header")}
                        <span
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.isSortRequired ? (
                            <FontAwesomeIcon
                              icon={
                                column.isSortedDesc == undefined
                                  ? faSortAmountUp
                                  : column.isSortedDesc
                                  ? faSortAmountDesc
                                  : faSortAmountUp
                              }
                              style={{
                                fontSize: "1rem",
                                color:
                                  column.isSortedDesc == undefined
                                    ? `${AppColors.LighterGrey}`
                                    : `${AppColors.Black}`,
                              }}
                            />
                          ) : (
                            ""
                          )}
                        </span>
                      </TableHeader>
                    ))}
                  </tr>
                ))}
              </TableHead>
              <tbody {...getTableBodyProps()}>
                {page.map((row: any, i: any) => {
                  prepareRow(row);
                  return (
                    <TableRow {...row.getRowProps()}>
                      {row.cells.map((cell: any) => {
                        return (
                          <TableCell {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </tbody>
            </TableComp>
          </TableOuterContainer>
          <Pagination>
            <InnerDiv>
              <Button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <FiChevronLeft></FiChevronLeft>
              </Button>
            </InnerDiv>
            <InnerDiv>
              {/* <span> */}
              Page {/* <strong> */}
              {pageIndex + 1} of {pageOptions.length}
              {/* </strong> */}
              {/* </span> */}
            </InnerDiv>
            <InnerDiv>
              <Button onClick={() => nextPage()} disabled={!canNextPage}>
                <FiChevronRight></FiChevronRight>
              </Button>
            </InnerDiv>
          </Pagination>
        </>
      ) : (
        <NoData />
      )}
    </TableContainer>
  );
};

export default React.memo(Table);

const TableContainer = styled.div`
  padding: 2rem 2rem 0rem 2rem;
  overflow-x: auto;
  height: 90% !important;
  display: flex;
  flex-direction: column;
`;
const TableComp = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: ${AppColors.LightBrown};
`;
const TableHeader = styled.th`
  padding: 1rem;
  font-size: 14px !important;
  font-weight: 500;
  background: ${AppColors.LightBrown};
`;
const TableCell = styled.td`
  padding: 12px 12px 12px 12px;
  text-align: center;
  border-bottom: 1px solid ${AppColors.LightGrey};
`;
const TableRow = styled.tr`
  &:hover {
    background-color: ${AppColors.LightBrown};
  }
  &:nth-of-type(even) {
    // background: ${AppColors.LightGrey};
    border: none;
  }
`;
const Pagination = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  display: flex;
  /* background-color: red; */
  justify-content: flex-end;
  align-items: center;
  /* flex-direction: row; */
`;
const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
`;

const InnerDiv = styled.div`
  display: inline-block;
`;

const TableOuterContainer = styled.div`
  height: 100%
`
