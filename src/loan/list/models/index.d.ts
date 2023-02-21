import { ModelOfTheme } from "@poc/theme"
import { Component } from "react"
import {LoanEntity} from '@poc/core';

export type ModelOfLoanListTemplate = {
  theme: ModelOfTheme;
  loans: LoanEntity[]
}

export class LoanListTemplate extends Component<ModelOfLoanListTemplate> {}
