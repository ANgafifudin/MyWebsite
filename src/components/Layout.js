import "tailwindcss/tailwind.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <Footer />
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default Layout
