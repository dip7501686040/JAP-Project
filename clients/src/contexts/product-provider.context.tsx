import React, { useState } from 'react'
import { ProductContext } from '../types/product.type'

export const productContext = React.createContext<ProductContext>({
  searchTerm: '',
  setSearchTerm: () => undefined
})

function ProductProvider({ children }: any) {
  const [searchTerm, setSearchTerm] = useState('');
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <productContext.Provider
      value={{
        searchTerm,
        setSearchTerm
      }}
    >
      {children}
    </productContext.Provider>
  )
}

export default ProductProvider