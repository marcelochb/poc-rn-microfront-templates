import React from 'react'
import { IPixListTemplate } from '../interface'
import { Buttons, List, ListItemLoan, PageWrapper } from '@poc/ui'
import { styles } from './styles'

export const PixListTemplate: React.FC<IPixListTemplate> = ({
  theme,
  listData,
  loading,
  error,
  errorText,
  callBack,
  navigateToCreate,
  IconAddButton
}) => {
  return (
    <PageWrapper
      theme={theme}
      loading={loading}
      error={error}
      errorText={errorText}
      isStatusBarLight
      ButtonFixed={
        <Buttons.Fixed
          theme={theme}
          onPress={navigateToCreate}
          IconSVG={IconAddButton}
        />
      }
    >
      <List
        theme={theme}
        style={styles.list}
        data={listData}
        item={({ item }) => <ListItemLoan theme={theme}
          name={item.name}
          type={item.bank}
          amount={item.amount}
          onPressed={() => callBack?.call(this,item)}
          />
        }
      />
    </PageWrapper>
  )
}


