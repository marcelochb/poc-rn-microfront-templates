import { StyleSheet, View } from 'react-native'
import React from 'react'
import { PageWrapper, Texts } from '@poc/ui'
import { ITemplate } from '@poc/interfaces'
import { PaymentEntity } from '@poc/core'
import { styles } from './styles'

export const PaymentDetailTemplate: React.FC<ITemplate<PaymentEntity>> = ({
  theme,
  loading,
  error,
  data,
}) => {
  return (
    <PageWrapper
      theme={theme}
      isStatusBarLight
      error={error}
      loading={loading}
    >
      <View style={styles(theme).container}>
        <Texts.SubTitle style={styles(theme).label} theme={theme}>Beneficiário</Texts.SubTitle>
        <Texts.Body style={[styles(theme).value, styles(theme).marginBottom]} theme={theme}>{data?.recipient}</Texts.Body>
        <Texts.SubTitle style={styles(theme).label} theme={theme}>Pagador</Texts.SubTitle>
        <Texts.Body style={[styles(theme).value, styles(theme).marginBottom]} theme={theme}>{data?.payer}</Texts.Body>
        <View style={styles(theme).viewRow}>
          <View>
            <Texts.SubTitle style={styles(theme).label} theme={theme}>Valor</Texts.SubTitle>
            <Texts.Body style={styles(theme).value} theme={theme}>{data?.amount}</Texts.Body>
          </View>
          <View>
            <Texts.SubTitle style={styles(theme).label} theme={theme}>Vencimento</Texts.SubTitle>
            <Texts.Body style={styles(theme).value} theme={theme}>{data?.dueDate}</Texts.Body>
          </View>
        </View>
      </View>
    </PageWrapper>
  )
}



