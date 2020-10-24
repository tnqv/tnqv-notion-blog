import React from 'react'
import { Div, Text, Button, Icon } from 'atomize'

export default () => {
  return (
    <Div
      flexGrow="1"
      d="flex"
      justify="center"
      align="center"
      flexDir="column"
      m={{ b: '0.25rem' }}
    >
      <Div
        h="8.5rem"
        w="8.5rem"
        bg="gray900"
        rounded="circle"
        pos="relative"
        bgImg="/totoro-crop.png"
        bgSize="cover"
        bgPos="center"
        m={{ b: '1rem' }}
      >
        <Div id="SpeechBubble">Halooooo!!!</Div>
      </Div>
      <Text
        textSize="heading"
        m={{ b: '0.25rem' }}
        textWeight="500"
        textAlign="center"
      >
        Vu Tran
      </Text>
      <Text
        textSize="subheading"
        textColor="light"
        textAlign="center"
        m={{ b: '0.15rem' }}
      >
        Passionate Software Engineer
      </Text>
      <Text textSize="body" textAlign="center">
        Write blog for fun {'&'} memorizing
      </Text>
    </Div>
  )
}
