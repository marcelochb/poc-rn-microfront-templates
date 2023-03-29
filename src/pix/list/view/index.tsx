import React from 'react'
import { IPixListTemplate } from '../interface'
import { List, ListItemPix, PageWrapper } from '@poc/ui'
import { styles } from './styles'

export const PixListTemplate: React.FC<IPixListTemplate> = ({
  theme,
  listData,
  loading,
  error,
  errorText,
  callBack,
}) => {
  return (
    <PageWrapper
      theme={theme}
      loading={loading}
      error={error}
      errorText={errorText}
      isStatusBarLight
    >
      <List
        theme={theme}
        style={styles.list}
        data={listData}
        item={({ item }) => <ListItemPix theme={theme}
          date={item.date}
          name={item.name}
          bank={item.bank}
          amount={item.amount}
          onPressed={() => callBack?.call(this,item)}
          />
        }
      />
    </PageWrapper>
  )
}


