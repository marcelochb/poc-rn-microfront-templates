import { ModelOfTheme } from "@poc/theme"
import { Component } from "react"
import {LoanEntity} from '@poc/core';

export type ModelOfLoanListTemplate = {
  theme: ModelOfTheme;
  loans: LoanEntity[];
  loading: boolean;
  error: boolean;
  errorText: string;
  navigateToDetail: (id:string) => void;
}

export class LoanListTemplate extends Component<ModelOfLoanListTemplate> {}
