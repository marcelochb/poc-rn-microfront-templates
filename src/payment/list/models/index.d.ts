import { ModelOfTheme } from "@poc/theme"
import { Component } from "react"

export type ModelOfPaymentListTemplate = {
  theme: ModelOfTheme
}

export class PaymentListTemplate extends Component<ModelOfPaymentListTemplate> {}
