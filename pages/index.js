import Layout from "./components/Layout"
import InicioCarousel from "./components/Carousel/Carousel"

export default function Home() {
  return (
    <Layout>
      <InicioCarousel/>
      <div className="entrada">
        <h2>Instituto Mexicano del Cemento y del Concreto A.C.</h2>
        <h3>Compartir el Conocimiento</h3>
      </div>
    </Layout>
  )
}
