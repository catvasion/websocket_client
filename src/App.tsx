import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { StatResponse, Stat } from './types'
import { Loading, Error, TabPanel } from './components'
import AppContext from './context'

function App() {
	const [data, setData] = useState<null | Stat[]>(null)
	const [error, setError] = useState<null | StatResponse['error']>(null)
	const [selectedRegion, setSelectedRegion] = useState<number>(0)

	const WS_URL = 'ws://localhost:3000'

	const { lastJsonMessage } = useWebSocket(WS_URL, {
		shouldReconnect: () => true,
	})

	useEffect(() => {
		if (lastJsonMessage !== null) {
			setError((lastJsonMessage as StatResponse).error)
			setData((lastJsonMessage as StatResponse).data)
		}
	}, [lastJsonMessage])

	return (
		<AppContext.Provider
			value={{
				error,
				setSelectedRegion,
				selectedRegion,
				data,
			}}
		>
			<main className='bg-violet-100 min-h-screen p-10'>
				{error ? <Error /> : data === null ? <Loading /> : <TabPanel />}
			</main>
		</AppContext.Provider>
	)
}

export default App
