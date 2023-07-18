import { useState, useEffect } from "react"
import { LuInstagram, LuChevronUp, LuChevronUpSquare } from "react-icons/lu"

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Tampilkan tombol saat scroll mencapai 20% dari tinggi halaman
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight * 0.2) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Tambahkan event listener saat melakukan scroll
    window.addEventListener("scroll", toggleVisibility)

    // Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "fixed bottom-4 right-4" : "hidden"
      }   opacity-50 text-primary-200  `}
    >
      <LuChevronUpSquare className="md:w-10 md:h-10 w-9 h-9" />
    </button>
  )
}

export default BackToTopButton
