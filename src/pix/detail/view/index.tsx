import { StyleSheet } from 'react-native'
import React from 'react'
import { ModelOfPixDetailTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'

export const PixDetailTemplate: React.FC<ModelOfPixDetailTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>PixDetailTemplate</Texts.Title>
    </PageWrapper>
  )
}


const styles = StyleSheet.create({})
