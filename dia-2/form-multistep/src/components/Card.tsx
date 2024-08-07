function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {children}
    </div>
  )
}

export default Card