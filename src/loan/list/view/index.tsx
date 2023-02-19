import { StyleSheet } from 'react-native'
import React from 'react'
import { ModelOfLoanListTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'

export const LoanListTemplate: React.FC<ModelOfLoanListTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>LoanListTemplate</Texts.Title>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({})
