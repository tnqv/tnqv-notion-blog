import React from 'react'
import { Div, Text, Button, Icon } from 'atomize'

export default () => {
  return (
    <Div flexGrow="1" d="flex" justify="center" align="center" flexDir="column">
      <Div
        h="4.5rem"
        w="4.5rem"
        bg="gray300"
        rounded="circle"
        pos="relative"
        bgImg="/totoro-crop.png"
        bgSize="cover"
        bgPos="center"
        m={{ b: '1rem' }}
      >
        <Div
          pos="absolute"
          rounded="circle"
          right="0.25rem"
          bottom="0.25rem"
          bg="white"
          shadow="2"
          h="0.5rem"
          w="0.5rem"
          p="1px"
        >
          <Div bg="success800" rounded="circle" h="6px" w="6px" />
        </Div>
      </Div>
      <Text
        textSize="title"
        m={{ b: '0.25rem' }}
        textWeight="500"
        textAlign="center"
      >
        Vu Tran
      </Text>
      <Text
        textSize="caption"
        textColor="light"
        m={{ b: '2.5rem' }}
        textAlign="center"
      >
        Sofrware Engineer
      </Text>
    </Div>
  )
}
