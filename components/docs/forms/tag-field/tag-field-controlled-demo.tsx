"use client"

import { useListData } from "react-stately"
import { Description, TagField } from "ui"

export default function TagFieldControlledDemo() {
  const selectedItems = useListData({
    initialItems: [{ id: 1, name: "Ferrari" }],
  })

  return (
    <div className="max-w-xs">
      <TagField
        appearance="outline"
        label="Add tag"
        onItemInserted={(key) => console.info("onItemInserted", key)}
        onItemCleared={(key) => console.info("onItemCleared", key)}
        description="You can add multiple tags"
        list={selectedItems}
      />
      <Description className="mt-4 block max-w-xs [&>strong]:text-fg [&>strong]:text-medium">
        {JSON.stringify(selectedItems.items)}
      </Description>
    </div>
  )
}