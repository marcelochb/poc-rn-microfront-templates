import { StyleSheet } from 'react-native'
import React from 'react'
import { IPixDetailTemplate } from '../models'
import { PageWrapper, Texts } from '@poc/ui'

export const PixDetailTemplate: React.FC<IPixDetailTemplate> = ({theme}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>PixDetailTemplate</Texts.Title>
    </PageWrapper>
  )
}


const styles = StyleSheet.create({})
