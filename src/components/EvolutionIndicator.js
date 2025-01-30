function EvolutionIndicator({ family, currentId }) {
    const sortedFamily = family.sort((a, b) => a.id - b.id);
    const currentIndex = sortedFamily.findIndex(p => p.id === currentId);
  
    return (
      <div className="evolution-chain">
        {sortedFamily.map((p, index) => (
          <React.Fragment key={p.id}>
            <div className={`evolution-node ${p.id === currentId ? 'current' : ''}`}>
              <img src={p.sprite} alt={p.name} />
              <span>#{String(p.id).padStart(3, '0')}</span>
            </div>
            {index < sortedFamily.length - 1 && (
              <div className={`evolution-arrow ${index < currentIndex ? 'evolved' : ''}`}>
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }