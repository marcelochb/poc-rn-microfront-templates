import { StyleSheet } from 'react-native'
import React from 'react'
import { IPaymentDetailTemplate } from '../interface'
import { PageWrapper, Texts } from '@poc/ui'

export const PaymentDetailTemplate: React.FC<IPaymentDetailTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>PaymentDetailTemplate</Texts.Title>
    </PageWrapper>
  )
}


const styles = StyleSheet.create({})
