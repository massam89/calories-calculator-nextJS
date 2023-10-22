import './globals.css'

export const metadata = {
  title: 'Calories Calculator',
  description: 'calculate your calories in a second',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
