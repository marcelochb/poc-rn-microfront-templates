import { StyleSheet } from 'react-native'
import React from 'react'
import { ModelOfPaymentDetailTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'

export const PaymentDetailTemplate: React.FC<ModelOfPaymentDetailTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>PaymentDetailTemplate</Texts.Title>
    </PageWrapper>
  )
}


const styles = StyleSheet.create({})
