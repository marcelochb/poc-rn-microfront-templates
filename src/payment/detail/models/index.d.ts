import { ModelOfTheme } from "@poc/theme"
import { Component } from "react"

export type ModelOfPaymentDetailTemplate = {
  theme: ModelOfTheme
}

export class PaymentDetailTemplate extends Component<ModelOfPaymentDetailTemplate> {};
