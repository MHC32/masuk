import {Input} from 'tamagui'
import React from 'react'
import { tokens } from '../../tamagui.config'

const CustomInput = ({placeholder}) => {
  return (
    <Input
      w='277'
      h='44'
      br={tokens.size.small}
      color={tokens.color.quinary}
      placeholder={placeholder}
      borderColor={tokens.color.Senary}
    />
  )
}

export default CustomInput