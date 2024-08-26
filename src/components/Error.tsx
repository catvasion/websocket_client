import { useContext } from 'react'
import AppContext from '../context'

const Error = () => {
	const appState = useContext(AppContext)
	if (!appState) {
		return <></>
	}
	return (
		<article className='flex items-center justify-center min-h-screen'>
			<div className='flex flex-col'>
				<h1 className='title'>{appState.error?.code} Error:</h1>
				<p className='subtitle'>Oops something went wrong.</p>
				<p className='body !text-red-500'>{appState.error?.message}.</p>
			</div>
		</article>
	)
}

export default Error
