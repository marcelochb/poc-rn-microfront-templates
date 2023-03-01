import { LoanEntity } from "@poc/core";
import { ITheme } from "@poc/theme"
import { Component } from "react"

export type ModelOfLoanDetailTemplate = {
  theme: ITheme;
  loading: boolean;
  error: boolean;
  loan: LoanEntity;
}

export class LoanDetailTemplate extends Component<ModelOfLoanDetailTemplate> {};
