import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import MockupGrid from './components/MockupGrid'
import Footer from './components/Footer'

const mockups = [
  {
    id: 1,
    title: "Logo Design Concept",
    type: "2d" as const,
    image: "/mockups/2d/logo-concept.jpg",
    description: "Initial logo design concepts for brand identity"
  },
  {
    id: 2,
    title: "Product Packaging",
    type: "2d" as const,
    image: "/mockups/2d/packaging-design.jpg",
    description: "Packaging design for eco-friendly products"
  },
  {
    id: 3,
    title: "3D Product Model",
    type: "3d" as const,
    image: "/mockups/3d/product-model.jpg",
    description: "3D rendered product visualization"
  },
  {
    id: 4,
    title: "Interior Space Mockup",
    type: "3d" as const,
    image: "/mockups/3d/interior-space.jpg",
    description: "3D interior design visualization"
  }
]

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mockups Portfolio - Aina Eco</title>
        <meta name="description" content="A modern portfolio showcasing 2D and 3D design mockups" />
      </Helmet>
      
      <Header />
      <main>
        <MockupGrid mockups={mockups} />
      </main>
      <Footer />
    </div>
  )
}

export default App
