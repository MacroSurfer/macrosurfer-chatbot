import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Macrosurfer Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is your assistant to get upcoming economic event calendar information, and learn about each event.
        </p>
        <p className="leading-normal text-muted-foreground">
          It helps you to learn about economic events in easy to understand way without the need to navigate through complex concepts in economic textbooks.
        </p>
      </div>
    </div>
  )
}
