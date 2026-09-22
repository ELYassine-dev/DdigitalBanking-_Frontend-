export interface AccountDetails {
  accountid:     string;
  balance:       number;
  currentPage:   number;
  operationsdto: Operations[];
  size:          number;
  totalPage:     number;
}

export interface Operations {
  amount:        number;
  date:          Date;
  description:   string;
  id:            number;
  operationType: string;
}
