import { StatResponse } from '../types'
const Error = ({ error }: { error: StatResponse['error'] }) => {
	return (
		<main className='flex items-center justify-center bg-purple-200 min-h-screen p-10'>
			<div className='flex flex-col'>
				<h1 className='title'>{error?.code} Error:</h1>
				<p className='subtitle'>Oops something went wrong.</p>
				<p className='body !text-red-500'>{error?.message}.</p>
			</div>
		</main>
	)
}

export default Error
