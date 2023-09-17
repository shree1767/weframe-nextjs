import '@styles/globals.css'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

export const metadata = {
    title: "weframe",
    descripton:"Assignement task for internship"
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
           <Navbar/>
           <Sidebar/>
           <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            {children}
           </main>
        </body>
    </html>
  )
}

export default RootLayout;