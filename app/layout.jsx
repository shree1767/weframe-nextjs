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
           <main className='app'>
            {children}
           </main>
        </body>
    </html>
  )
}

export default RootLayout;