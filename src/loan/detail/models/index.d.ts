import { ModelOfTheme } from "@poc/theme"
import { Component } from "react"

export type ModelOfLoanDetailTemplate = {
  theme: ModelOfTheme
}

export class LoanDetailTemplate extends Component<ModelOfLoanDetailTemplate> {};
