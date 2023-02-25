import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ModelOfLoanDetailTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'
import { ModelOfTheme } from '@poc/theme'

export const LoanDetailTemplate: React.FC<ModelOfLoanDetailTemplate> = ({
  theme,
  loading,
  error,
  loan
}) => {
  return (
    <PageWrapper
      theme={theme}
      isStatusBarLight
      error={error}
      loading={loading}
    >
      <View style={styles(theme).container}>
        <Texts.SubTitle style={styles(theme).label} theme={theme}>Nome</Texts.SubTitle>
        <Texts.Body style={styles(theme).value} theme={theme}>{loan.name}</Texts.Body>
        <Texts.SubTitle style={styles(theme).label} theme={theme}>Tipo</Texts.SubTitle>
        <Texts.Body style={styles(theme).value} theme={theme}>{loan.type}</Texts.Body>
        <Texts.SubTitle style={styles(theme).label} theme={theme}>Valor</Texts.SubTitle>
        <Texts.Body style={styles(theme).value} theme={theme}>{loan.amount}</Texts.Body>
      </View>
    </PageWrapper>
  )
}


const styles = (theme:ModelOfTheme) => {
  const {metrics, colors, fontFamily,fontSize} = theme;
 return StyleSheet.create({
  container: {
    padding: metrics.base,
    margin: metrics.base,
    borderColor: colors.elementsSecundary,
    borderWidth: 0.2,
    borderRadius: metrics.radiusBase
  },
  label: {
    color: colors.elementsSecundary,
    fontFamily: fontFamily.italic
  },
  value: {
    fontSize: fontSize.large,
    marginBottom: metrics.large
  }
})
}
