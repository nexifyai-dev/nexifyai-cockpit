import { Outfit, Manrope } from "next/font/google"

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-outfit",
})

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
})
