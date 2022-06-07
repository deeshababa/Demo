export interface mainPageContainerProps {
  padding?: string;
  width?: string;
  height?: string;
}

export interface orderData {
  order_number: number;
  status: string;
  amount: string;
  store: string;
  users: string;
  products: string;
  created_at: string;
  phone_number: number;
}

export interface formHeaderProps {
  color?: string;
  fontSize?: string;
}
export interface formDataProps {
  new_password?: string;
  confirm_password?: string;
  mobile_number?: number;
  email?: string;
  password?: string;
  order_number?: string;
  status?: string;
  amount?: number;
  store?: string;
  user?: string;
  products?: string;
  phone_number?: string;
  participants?: number;
  registration_start_date?: string;
  registration_end_date?: string;
  city_name?: string;
  tournament_start_date?: string;
  tournament_end_date?: string;
}

export interface orderListColumnProps {
  disableGlobalFilter?: boolean;
  Header: string;
  accessor: string | "";
  isSortRequired?: boolean;
}

export interface dataFieldStyleProps {
  flexDirection?: string;
  alignItems?: string;
  gap?: string;
  width?: string;
  marginTop?: string;
  justifyContent?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}
export interface dataFieldProperty extends dataFieldStyleProps {
  label?: string;
  type: string;
  name: string;
  defaultValue?: string;
  key?: string;
  style?: object;
  placeholder?: string;
  alignItems?: string;
  textAlign?: string;
  boxWidth?:string;
}
export interface dataFieldProps extends dataFieldContainerProps {
  style?: object;
  property: dataFieldProperty[];
}

export interface dataFieldContainerProps {
  marginTop?: string;
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  flexDirection?: string;
  justifyContent?: string;
  gap?: string;
  flexWrap?: string;
}

export interface dropdownContainerProps {
  gap?: string | undefined;
  justifyContent?: string;
  flexDirection?: "row" | "column" | undefined;
  textAlign?: "left" | "right" | undefined;
  marginTop?: string;
}

export interface dateFieldContainerProps {
  flexWrap?: string;
  flexDirection?: string;
  marginTop?: string;
}

export interface dateFieldStyleProps {
  flexDirection?: string;
  alignItems?: string;
  gap?: string;
  width?: string;
  marginTop?: string;
}
export interface dateFieldProperty extends dateFieldStyleProps {
  label: string;
  name: string;
  showTime?: boolean;
  date?: null | Date;
  style?: object;
}
export interface dateFieldProps extends dateFieldContainerProps {
  style?: object;
  property: dateFieldProperty[];
}

export interface datePickerContainer {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  width?: string;
  gap?: string;
  marginTop?: string;
}

export interface dropdownProperty extends dropdownContainerProps {
  label: string;
  type?: string;
  name: string | "";
  value?: string;
  dataList: string[];
  style?: object;
  marginLeft?:string;
  textAlign?: "left" | "right" | undefined;
}
export interface dropDownFieldProps
  extends dropdownContainerProps,
    dropdownContainerListProps {
  style?: object;
  property: dropdownProperty[];
}

export interface dropdownContainerProps {
  flexDirection?: string;
  alignItems?: string;
  gap?: string;
  width?:string;
  flexWrap?:string;
  marginLeft?:string;
}

export interface dropdownContainerListProps {
  gap?: string;
  justifyContent?: string;
  flexDirection?: string;
  marginTop?: string;
  flexWrap?:string;
}
export interface buttonProperty {
  type: "button" | "submit" | "reset" | undefined;
  value: string;
  handleButtonClick?: MouseEventHandler<HTMLButtonElement>;
  style?: object;
  variant?: "primary" | "secondary";
  width?: "full" | "custom" | undefined;
  borderType?: "halfCurved" | undefined;
  backgroundColor?:string;
  color?:string;
  border?:string;
}
export interface buttonFieldProps {
  style?: object;
  property: buttonProperty[];
  marginTop?: string;
  justifyContent?: string;
  gap?: string;
}

export interface buttonContainerProps {
  marginTop?: string;
  gap?: string;
  justifyContent?: string;
}
export interface radioButtonProperty {
  label: string;
  type?: "radio";
  isChecked?: boolean;
  name: string;
  value?: string;
  style?: object;
  color?: string;
  fontSize?: string;
}

export interface RadioButtonLabelProps {
  color?: string;
  fontSize?: string;
}
export interface radioButtonProps extends radioButtonContainerProps {
  style?: object;
  property: radioButtonProperty[];
  gap?: string;
  flexDirection: string;
  justifyContent: string;
}

export interface radioButtonContainerProps {
  gap?: string;
  justifyContent?: string;
  flexDirection?: string;
}

export interface defaultObjectProps {
  [key: string]: string;
}

//style props

export interface menuLinkProps {
  isActive?: boolean;
}

//Table props

export type Cell = {
  render: (type: string) => JSX.Element;
  getCellProps: () => void;
  column: Column;
  row: Row;
  state: string;
  value: string | JSX.Element;
};

export type Row = {
  index: number;
  cells: Cell[];
  getRowProps: () => void;
  original: object;
};

export type tableSortProps = {
  title?: string | undefined;
  style?: CSSProperties | undefined;
  onClick?: ((e: MouseEvent) => void) | undefined;
};

export type EnhancedColumn = {
  render: (type: string) => JSX.Element;
  getHeaderProps: (column: tableSortProps) => void;
  isSortRequired?: boolean;
  isSortedDesc?: undefined | boolean;
  getSortByToggleProps: (props?: tableDefaultProps[]) => tableSortProps;
};

export type HeaderGroup = {
  headers: EnhancedColumn[];
  getRowProps: (userProps?: object) => object;
  getHeaderGroupProps: () => void;
};

export interface tableDefaultProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
  role?: string | undefined;
}

export interface useTableProps {
  getTableProps: (propGetter?: tableDefaultProps) => TableProps;
  rows?: Array<D>;
  getTableBodyProps: (propGetter?: tableDefaultProps) => TableBodyProps;
  headerGroups: Array<HeaderGroup<D>>;
  page?: Array<Row<D>>;
  prepareRow: (row: Row<D>) => void;
  setFilter?: (
    columnId: String,
    updater: ((filterValue: string) => string) | string
  ) => void;
  setAllFilters?: (
    updater:
      | Array<{ id: String | number; value: String }>
      | ((
          filters: Array<{ id: String | number; value: string }>
        ) => Array<{ id: String | number; value: string }>)
  ) => void;
  setGlobalFilter?: (filterValue: string | undefined) => void;
  canPreviousPage?: boolean;
  canNextPage?: boolean;
  nextPage?: () => void;
  pageOptions?: number[];
  previousPage?: () => void;
  setPageSize?: (pageSize: number) => void;
  state: { hiddenColumns?: Array<String> | undefined; pageIndex?: number };
}
