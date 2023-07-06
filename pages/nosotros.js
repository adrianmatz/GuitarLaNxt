import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre Nosotros, GuitarLA, tienda de música"
    >
        <main className="contenedor">
          
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>

            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

            <div>
              <p>Pellentesque mattis purus turpis, sit amet commodo erat euismod eu. Phasellus condimentum tellus a lectus gravida maximus. Mauris malesuada ante non odio mattis, sit amet eleifend velit blandit. Aenean et enim egestas, maximus lacus in, finibus urna. Duis accumsan vestibulum urna, eget mollis ex varius sed. Mauris convallis imperdiet blandit. Curabitur dapibus porta erat, at maximus odio commodo eget.</p>

              <p>Quisque a magna et mauris lacinia auctor quis eget augue. Nunc metus turpis, iaculis a felis a, congue semper odio. Maecenas tortor sapien, sollicitudin ut fringilla at, consectetur ac turpis. Nulla interdum dolor et facilisis ultrices. Aliquam ut enim facilisis, eleifend nisi quis, tempus felis. Nullam a velit a elit suscipit sagittis in ac orci. Mauris auctor ligula sapien. Nam vel enim luctus, malesuada arcu vitae, faucibus nisi</p>
            </div>
          </div>

        </main>
    </Layout>
  )
}
