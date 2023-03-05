import { StyleSheet } from 'react-native'
import React from 'react'
import { IPixListTemplate } from '../interface'
import { PageWrapper, Texts } from '@poc/ui'

export const PixListTemplate: React.FC<IPixListTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>PixListTemplate</Texts.Title>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({})
