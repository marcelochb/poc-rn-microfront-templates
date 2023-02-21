import { StyleSheet } from 'react-native'
import React from 'react'
import { ModelOfLoanListTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'

export const LoanListTemplate: React.FC<ModelOfLoanListTemplate> = ({theme,loans}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>LoanListTemplate</Texts.Title>
      {loans.map(loan => (
        <Texts.Body theme={theme}>{loan.name}</Texts.Body>
      ))}
    </PageWrapper>
  )
}

const styles = StyleSheet.create({})
