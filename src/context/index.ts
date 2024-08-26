import { createContext } from 'react'
import { AppContext } from '../types/index'

const AppContext = createContext<undefined | AppContext>(undefined)
export default AppContext
