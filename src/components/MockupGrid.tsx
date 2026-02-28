import { useState } from 'react'

interface Mockup {
  id: number
  title: string
  type: '2d' | '3d'
  image: string
  description: string
}

interface MockupGridProps {
  mockups: Mockup[]
}

const MockupGrid = ({ mockups }: MockupGridProps) => {
  const [filter, setFilter] = useState<'all' | '2d' | '3d'>('all')

  const filteredMockups = filter === 'all' 
    ? mockups 
    : mockups.filter(mockup => mockup.type === filter)

  return (
    <div className="container">
      <section className="filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === '2d' ? 'active' : ''}`}
          onClick={() => setFilter('2d')}
        >
          2D Mockups
        </button>
        <button 
          className={`filter-btn ${filter === '3d' ? 'active' : ''}`}
          onClick={() => setFilter('3d')}
        >
          3D Mockups
        </button>
      </section>

      <section className="mockups-grid">
        {filteredMockups.length === 0 ? (
          <div className="no-mockups">No mockups found for this category.</div>
        ) : (
          filteredMockups.map(mockup => (
            <div key={mockup.id} className="mockup-card">
              <img 
                src={mockup.image} 
                alt={mockup.title} 
                className="mockup-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZjBmMCIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4='
                }}
              />
              <div className="mockup-info">
                <h3 className="mockup-title">{mockup.title}</h3>
                <span className={`mockup-type type-${mockup.type}`}>
                  {mockup.type.toUpperCase()}
                </span>
                <p className="mockup-description">{mockup.description}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  )
}

export default MockupGrid
