import React from 'react'

interface Props {
  text: string
}

const Title: React.FC<Props> = ({ text }) => {
  return <h3 className="font-mono text-3xl font-bold">{text}</h3>
}

export default Title
