import { StyleSheet, View } from 'react-native'
import React from 'react'
import { PageWrapper, Texts } from '@poc/ui'
import { ITemplate } from '@poc/interfaces'
import { PixEntity } from '@poc/core'
import { styles } from './styles'

export const PixDetailTemplate: React.FC<ITemplate<PixEntity>> = ({
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
        <Texts.SubTitle style={styles(theme).label} theme={theme}>Transferência para</Texts.SubTitle>
        <Texts.Body style={[styles(theme).value, styles(theme).marginBottom]} theme={theme}>{data?.name}</Texts.Body>
        <Texts.SubTitle style={styles(theme).label} theme={theme}>Banco</Texts.SubTitle>
        <Texts.Body style={[styles(theme).value,styles(theme).marginBottom]} theme={theme}>{data?.bank}</Texts.Body>
        <View style={styles(theme).viewRow}>
          <View>
            <Texts.SubTitle style={styles(theme).label} theme={theme}>Valor</Texts.SubTitle>
            <Texts.Body style={styles(theme).value} theme={theme}>{data?.amount}</Texts.Body>
          </View>
          <View>
            <Texts.SubTitle style={styles(theme).label} theme={theme}>Valor</Texts.SubTitle>
            <Texts.Body style={styles(theme).value} theme={theme}>{data?.amount}</Texts.Body>
          </View>
        </View>
      </View>
    </PageWrapper>
  )
}



