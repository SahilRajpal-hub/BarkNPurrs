import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ description, keywords, title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to BarkNPurrs',
  description: '',
  keywords: '',
}

export default Meta
