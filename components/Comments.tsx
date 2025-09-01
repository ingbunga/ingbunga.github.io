'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useTheme } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const { resolvedTheme } = useTheme()

  if (!siteMetadata.comments?.provider) {
    return null
  }

  // select giscus theme based on user preference
  if (siteMetadata.comments.provider === 'giscus') {
    if (resolvedTheme === 'dark') {
      siteMetadata.comments.giscusConfig.theme = 'dark'
    } else if (resolvedTheme === 'light') {
      siteMetadata.comments.giscusConfig.theme = 'light'
    } else {
      siteMetadata.comments.giscusConfig.theme = 'preferred_color_scheme'
    }
  }

  return (
    <>
      <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
    </>
  )
}
