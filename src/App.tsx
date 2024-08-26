import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { Stat } from './types'
import { Loading } from './components'

function App() {
	const [data, setData] = useState<null | Stat[]>(null)

	const WS_URL = 'ws://localhost:3000'

	const { lastJsonMessage } = useWebSocket(WS_URL, {
		onOpen: () => console.log('WebSocket connection established.'),
		onClose: () => console.log('WebSocket connection closed.'),
		onError: (error) => console.log('WebSocket error:', error),
		shouldReconnect: () => true,
	})

	useEffect(() => {
		if (lastJsonMessage !== null) {
			setData(lastJsonMessage as Stat[])
			console.log(lastJsonMessage)
		}
	}, [lastJsonMessage])

	if (data === null) {
		return <Loading />
	}
	return (
		<main className='body flex flex-col items-center justify-center bg-purple-200 min-h-screen p-10'>
			Websocket App
		</main>
	)
}

export default App
