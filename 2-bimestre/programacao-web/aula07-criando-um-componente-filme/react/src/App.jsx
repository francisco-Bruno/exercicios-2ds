import Filme from "./components/Filme"

export default function App() {
  return (
    <div>
      <Filme nome="Matrix" ano={1999} />
      <Filme nome="Interestelar" ano={2014} />
      <Filme nome="Inception" ano={2010} />
    </div>
  )
}