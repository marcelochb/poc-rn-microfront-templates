import { ModelOfTheme } from "@poc/theme"
import { Component } from "react"

export type ModelOfLoanListTemplate = {
  theme: ModelOfTheme
}

export class LoanListTemplate extends Component<ModelOfLoanListTemplate> {}
