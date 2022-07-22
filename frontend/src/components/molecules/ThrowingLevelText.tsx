import React from 'react'
import { Text } from '../atoms/Text'

interface IProps {
  level: number
}

export const ThrowingLevelText = (props: IProps) => (
  <Text className="text--throwingLevel">
    Lv {props.level}
  </Text>
)