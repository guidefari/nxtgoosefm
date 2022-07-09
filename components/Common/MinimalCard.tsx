import { Link } from 'gatsby'
import React from 'react'

interface Props {
  title: string
  blurb: string
  imageUrl: string
  slug?: string
}

const MinimalCard: React.FC<Props> = ({ title, blurb, imageUrl, slug }) => {
  return (
    <Link to={slug}>
      <div>
        {imageUrl && <img src={imageUrl} alt={title} />}
        <h5>{title || ''}</h5>
        <p>{blurb || ''}</p>
      </div>
    </Link>
  )
}

export default MinimalCard
