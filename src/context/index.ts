import { createContext } from 'react'
import { AppContextInterface } from '../types/index'

const AppContext = createContext<undefined | AppContextInterface>(undefined)
export default AppContext
