"use client"

import * as React from "react"

import type { Key } from "react-aria-components"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, Chart, type ChartConfig, ChartTooltip, ChartTooltipContent, Select } from "ui"

const chartData = Array.from({ length: 50 }, (_, index) => {
  const date = new Date(2024, 0, 1 + index)
  return {
    date: date.toISOString().split("T")[0],
    sales: Math.floor(Math.random() * 1000 + 500),
    revenue: Math.floor(Math.random() * 3000 + 1500)
  }
})

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)"
  },
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig

export default function BarChartControlledDemo() {
  const [activeChart, setActiveChart] = React.useState<Key>("sales")

  const total = React.useMemo(
    () => ({
      sales: chartData.reduce((acc, curr) => acc + curr.sales, 0),
      revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0)
    }),
    []
  )

  return (
    <Card>
      <Card.Header className="justify-between flex-row items-center">
        <div className="space-y-1">
          <Card.Title>Business Overview</Card.Title>
          <Card.Description>Displaying total sales and revenue for the last 50 days</Card.Description>
        </div>
        <div>
          <Select selectedKey={activeChart} onSelectionChange={setActiveChart}>
            <Select.Trigger />
            <Select.List placement="bottom end" className="sm:min-w-40">
              {["sales", "revenue"].map((key) => {
                const chart = key as keyof typeof chartConfig
                return (
                  <Select.Option
                    key={chart}
                    data-active={activeChart === chart}
                    id={key}
                    textValue={chartConfig[chart].label}
                  >
                    <Select.OptionDetails
                      label={chartConfig[chart].label}
                      description={total[key as keyof typeof total].toLocaleString()}
                    />
                  </Select.Option>
                )
              })}
            </Select.List>
          </Select>
        </div>
      </Card.Header>
      <Card.Content className="px-2 sm:p-6">
        <Chart config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart as keyof typeof chartConfig} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </Chart>
      </Card.Content>
    </Card>
  )
}