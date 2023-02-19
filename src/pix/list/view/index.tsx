import { StyleSheet } from 'react-native'
import React from 'react'
import { ModelOfPixListTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'

export const PixListTemplate: React.FC<ModelOfPixListTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>PixListTemplate</Texts.Title>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({})
