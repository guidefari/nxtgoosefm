import React from 'react'

type Props = {
  title: string
  children: JSX.Element
}
const DefaultSingleArtifactLayout = ({ children }: Props) => (
  <div>
    <h1>My Layout</h1>
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-1">some side nav stuff</div>

      <article className="prose md:col-span-2 lg:prose-xl prose-headings:underline prose-a:text-green-600">
        {children}
      </article>
    </div>
  </div>
)

export default DefaultSingleArtifactLayout
