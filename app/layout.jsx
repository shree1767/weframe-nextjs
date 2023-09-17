import '@styles/globals.css'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

export const metadata = {
  title: "weframe",
  description: "Assignment task for internship"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout;
