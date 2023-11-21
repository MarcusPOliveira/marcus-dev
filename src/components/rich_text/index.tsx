import { ComponentProps } from 'react'
import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'

interface RichTextProps extends ComponentProps<typeof CMSRichText> {}

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="font-medium text-gray-50">{children}</b>
        ),
      }}
    />
  )
}
