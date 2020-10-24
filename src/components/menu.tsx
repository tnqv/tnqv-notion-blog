import React, { useState } from 'react'
import { Div, Text, Button, Icon, Input } from 'atomize'
import FollowCard from './follow-card'
import ExtLink from './ext-link'
import Link from 'next/link'

const buttons = [
  {
    title: 'Rss',
    icon: 'Notification',
    bg: 'warning900',
    hoverBg: 'warning600',
    color: 'white',
    link: '/atom.xml',
  },
  {
    title: 'Github',
    icon: 'Github',
    bg: 'black',
    hoverBg: 'light',
    color: 'white',
    link: 'https://github.com/tnqv/',
  },
  {
    title: 'LinkedIn',
    icon: 'Linkedin',
    bg: 'info800',
    hoverBg: 'info700',
    color: 'white',
    link: '#',
  },
  {
    title: 'Twitter',
    icon: 'Twitter',
    bg: 'info500',
    hoverBg: 'info300',
    color: 'white',
    link: 'https://twitter.com/tnqvsys',
  },
]

export default ({ ...rest }) => {
  const [query, setQuery] = useState('')

  const filterButtons = buttons.filter(button => {
    return button.title.toLowerCase().indexOf(query.toLowerCase()) > -1
  })

  return (
    <Div top="4.5rem" justify="center" align="center">
      <Div m={{ b: '0.5rem' }} p="1.5rem">
        <FollowCard />
        {filterButtons.length > 0 && (
          <Div d="flex" align="center" justify="center">
            {filterButtons.map((button, index) => (
              <Div
                d="inline-block"
                p={{ y: '0.4rem', x: '.2rem' }}
                align="center"
                key={index}
              >
                <ExtLink
                  href={button.link}
                  type={button.title === 'Rss' ? 'application/rss+xml' : null}
                >
                  <Button
                    h="2.5rem"
                    w="2.5rem"
                    bg={button.bg}
                    hoverBg={button.hoverBg}
                    rounded="lg"
                    m={{ r: '1rem' }}
                    shadow="2"
                    hoverShadow="4"
                  >
                    <Icon name={button.icon} size="20px" color={button.color} />
                  </Button>
                </ExtLink>
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
