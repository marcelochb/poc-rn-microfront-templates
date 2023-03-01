import { StyleSheet } from 'react-native'
import React from 'react'
import { IPaymentListTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'

export const PaymentListTemplate: React.FC<IPaymentListTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>PaymentListTemplate</Texts.Title>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({})
