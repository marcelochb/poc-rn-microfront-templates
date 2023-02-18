import { StyleSheet } from 'react-native'
import React from 'react'
import { ModelOfPaymentListTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'

export const PaymentListTemplate: React.FC<ModelOfPaymentListTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>PaymentListTemplate</Texts.Title>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({})
