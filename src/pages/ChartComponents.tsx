import React from 'react'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from 'recharts'

const data = [
  { month: 'Jan', sales: 4000, profit: 2400 },
  { month: 'Feb', sales: 3000, profit: 1398 },
  { month: 'Mar', sales: 2000, profit: 9800 },
  { month: 'Apr', sales: 2780, profit: 3908 },
  { month: 'May', sales: 1890, profit: 4800 },
  { month: 'Jun', sales: 2390, profit: 3800 },
  { month: 'Jul', sales: 3490, profit: 4300 },
]

const chartConfig = {
  sales: {
    label: 'Sales',
  },
  profit: {
    label: 'Profit',
  },
}

const ChartComponents = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Charts</h1>

      {/* Compact Stock Market Widgets */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Market Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { symbol: 'AAPL', name: 'Apple', price: 228.32, change: +1.24, data: [210,212,215,214,218,220,221,219,222,226,228] },
            { symbol: 'MSFT', name: 'Microsoft', price: 423.18, change: -0.68, data: [430,428,427,429,425,424,422,420,421,422,423] },
            { symbol: 'NVDA', name: 'NVIDIA', price: 118.44, change: +2.91, data: [104,106,108,110,112,114,113,115,116,117,118] },
            { symbol: 'TSLA', name: 'Tesla', price: 185.07, change: -1.73, data: [200,198,196,197,195,192,191,190,189,187,185] },
          ].map((s, idx) => {
            const points = s.data.map((v, i) => ({ i, v }))
            const up = s.change >= 0
            const colorClass = up ? 'text-emerald-400' : 'text-rose-400'
            const badgeClass = up ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
            const sign = up ? '+' : ''
            return (
              <div key={idx} className="rounded-xl border border-border/60 bg-card p-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-sm text-muted-foreground">{s.name}</div>
                    <div className="text-base font-semibold">{s.symbol}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">${s.price.toFixed(2)}</div>
                    <div className={`inline-flex items-center text-xs px-1.5 py-0.5 rounded ${badgeClass}`}>
                      {sign}{s.change.toFixed(2)}%
                    </div>
                  </div>
                </div>
                <div className={colorClass}>
                  <AreaChart width={280} height={60} data={points} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
                    <Area type="monotone" dataKey="v" stroke="currentColor" fill="currentColor" fillOpacity={0.15} strokeWidth={2} />
                  </AreaChart>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <div className="grid gap-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
          <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-3">
            <ChartContainer config={chartConfig} className="w-full aspect-auto h-40">
              <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent payload={[]} verticalAlign="bottom" />} />
              <Line type="monotone" dataKey="sales" stroke="hsl(var(--color-sales))" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="profit" stroke="hsl(var(--color-profit))" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
          <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-3">
            <ChartContainer config={chartConfig} className="w-full aspect-auto h-40">
              <BarChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent payload={[]} verticalAlign="bottom" />} />
              <Bar dataKey="sales" fill="hsl(var(--color-sales))" radius={[4,4,0,0]} />
              <Bar dataKey="profit" fill="hsl(var(--color-profit))" radius={[4,4,0,0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </section>

        {/* Shadcn-style Area Chart */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Area Chart</h2>
          <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-3">
            <ChartContainer config={chartConfig} className="w-full aspect-auto h-40">
              <AreaChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent payload={[]} verticalAlign="bottom" />} />
              <Area type="monotone" dataKey="sales" stroke="hsl(var(--color-sales))" fill="hsl(var(--color-sales))" fillOpacity={0.15} strokeWidth={2} />
              <Area type="monotone" dataKey="profit" stroke="hsl(var(--color-profit))" fill="hsl(var(--color-profit))" fillOpacity={0.15} strokeWidth={2} />
              </AreaChart>
            </ChartContainer>
          </div>
        </section>

        {/* Skipper UI-style Compact Gradient Chart */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"> UI infinity Compact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-sm text-muted-foreground">UI infinity Index</div>
                  <div className="text-lg font-semibold">UIF</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">1,284.22</div>
                  <div className="inline-flex items-center text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">+0.82%</div>
                </div>
              </div>
              <div className="text-cyan-400">
                <AreaChart width={520} height={120} data={data.map((d, i) => ({ i, v: d.sales }))} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="uifGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="currentColor" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="v" stroke="currentColor" fill="url(#uifGrad)" strokeWidth={2.2} />
                </AreaChart>
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-sm text-muted-foreground">UI infinity Tech</div>
                  <div className="text-lg font-semibold">UIF-T</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">3,902.10</div>
                  <div className="inline-flex items-center text-xs px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400">-1.12%</div>
                </div>
              </div>
              <div className="text-rose-400">
                <AreaChart width={520} height={120} data={data.map((d) => ({ k: d.month, v: d.profit }))} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="uifGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="currentColor" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="v" stroke="currentColor" fill="url(#uifGrad2)" strokeWidth={2.2} />
                </AreaChart>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ChartComponents


