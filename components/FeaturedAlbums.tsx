import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import MinimalCard from './Common/MinimalCard'
import Title from './Common/Title'

interface Album {
  node: {
    slug: string
    frontmatter: {
      genres: string[]
      artists: string[]
      title: string
      blurb: string
      imageUrl: string
    }
  }
}

const FeaturedAlbums = (): React.ReactElement => {
  const data = useStaticQuery(
    graphql`
      query GetFeaturedAlbums {
        allMdx(filter: { fileAbsolutePath: { regex: "/album/" } }) {
          edges {
            node {
              slug
              frontmatter {
                genres
                artists
                blurb
                title
                imageUrl
              }
            }
          }
        }
      }
    `,
  )

  const { edges: albums } = data.allMdx
  console.log('albums:', albums)

  return (
    <div>
      <Title text="Albums" />
      <div id="featured-album-wrapper">
        {albums.map((album: Album) => (
          <MinimalCard
            title={album.node.frontmatter.title}
            key={album.node.slug}
            blurb={album.node.frontmatter.blurb}
            imageUrl={album.node.frontmatter.imageUrl}
            slug={album.node.slug}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedAlbums
