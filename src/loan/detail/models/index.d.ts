import { LoanEntity } from "@poc/core";
import { ModelOfTheme } from "@poc/theme"
import { Component } from "react"

export type ModelOfLoanDetailTemplate = {
  theme: ModelOfTheme;
  loading: boolean;
  error: boolean;
  loan: LoanEntity;
}

export class LoanDetailTemplate extends Component<ModelOfLoanDetailTemplate> {};
