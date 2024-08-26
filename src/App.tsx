import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import { StatResponse, Stat } from './types'
import { Loading, Error } from './components'

function App() {
	const [data, setData] = useState<null | Stat[]>(null)
	const [error, setError] = useState<null | StatResponse['error']>(null)

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
	if (error) {
		return <Error error={error} />
	} else if (data === null) {
		return <Loading />
	}
	return (
		<main className='body flex flex-col items-center justify-center bg-purple-200 min-h-screen p-10'>
			Websocket App
		</main>
	)
}

export default App
