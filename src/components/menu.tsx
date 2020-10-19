import React, { useState } from 'react'
import { Div, Text, Button, Icon, Input } from 'atomize'
import FollowCard from './follow-card'

const buttons = [
  {
    title: 'Search',
    icon: 'Search',
    bg: 'warning700',
    hoverBg: 'warning600',
    color: 'white',
  },
  {
    title: 'Bookmark',
    icon: 'BookmarkSolid',
    bg: 'info700',
    hoverBg: 'info600',
    color: 'white',
  },
  {
    title: 'Delete',
    icon: 'DeleteSolid',
    bg: 'danger700',
    hoverBg: 'danger600',
    color: 'white',
  },
  {
    title: 'Play',
    icon: 'Play',
    bg: 'success700',
    hoverBg: 'success600',
    color: 'white',
  },
  {
    title: 'Heart',
    icon: 'HeartSolid',
    bg: 'danger300',
    hoverBg: 'danger400',
    color: 'danger700',
  },
  {
    title: 'Camera',
    icon: 'CameraSolid',
    bg: 'info300',
    hoverBg: 'info400',
    color: 'info700',
  },
  {
    title: 'Message',
    icon: 'MessageSolid',
    bg: 'success300',
    hoverBg: 'success400',
    color: 'success700',
  },
  {
    title: 'Attachment',
    icon: 'Attachment',
    bg: 'info300',
    hoverBg: 'info400',
    color: 'info700',
  },
]

export default ({ ...rest }) => {
  const [query, setQuery] = useState('')

  const filterButtons = buttons.filter(button => {
    return button.title.toLowerCase().indexOf(query.toLowerCase()) > -1
  })

  return (
    <Div
      left={{ md: '2rem', lg: '0' }}
      w={{ xs: '100%', md: '19.5rem' }}
      top="4.5rem"
    >
      <Div bg="white" shadow="4" rounded="xl" m={{ b: '0.5rem' }} p="1.5rem">
        <FollowCard />
        <Input
          placeholder="Search"
          onChange={e => setQuery(e.target.value)}
          suffix={
            <Icon
              name="Search"
              size="20px"
              cursor="pointer"
              onClick={() => console.log('clicked')}
              pos="absolute"
              top="50%"
              right="1rem"
              transform="translateY(-50%)"
            />
          }
        />
        {filterButtons.length > 0 && (
          <Div p={{ y: '0.5rem' }}>
            {filterButtons.map(button => (
              <Div d="flex" p={{ y: '0.4rem', x: '.2rem' }} align="center">
                <Button
                  h="2.5rem"
                  w="2.5rem"
                  bg={button.bg}
                  hoverBg={button.hoverBg}
                  rounded="circle"
                  m={{ r: '1rem' }}
                  shadow="2"
                  hoverShadow="4"
                >
                  <Icon name={button.icon} size="20px" color={button.color} />
                </Button>
                <Text textSize="paragraph" textColor="black100">
                  {button.title}
                </Text>
              </Div>
            ))}
          </Div>
        )}

        {filterButtons.length === 0 && (
          <Div p="2rem">
            <Text textAlign="center" textColor="gray900">
              No button found!
            </Text>
          </Div>
        )}
      </Div>
    </Div>
  )
}
