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
        ul: ({ children }) => (
          <ul className="list-inside list-disc flex-col gap-1 pl-2">
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            className="underline transition-colors hover:text-orange-600"
            {...props}
          >
            {children}
          </a>
        ),
      }}
    />
  )
}
