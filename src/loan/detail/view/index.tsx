import { StyleSheet } from 'react-native'
import React from 'react'
import { ModelOfLoanDetailTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'

export const LoanDetailTemplate: React.FC<ModelOfLoanDetailTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>LoanDetailTemplate</Texts.Title>
    </PageWrapper>
  )
}


const styles = StyleSheet.create({})
