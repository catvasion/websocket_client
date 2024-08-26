import { useContext } from 'react'
import AppContext from '../context'
import CircleIcon from '@mui/icons-material/Circle'
const Tab = ({
	region,
	tabIndex,
	status,
}: {
	region: string
	tabIndex: number
	status: string
}) => {
	const appState = useContext(AppContext)
	if (!appState) {
		return <></>
	}
	const ifActive = appState.selectedRegion === tabIndex
	return (
		<div
			className={`bg-white p-3 rounded-lg my-2 flex items-center justify-between gap-1 ${
				ifActive ? 'outline-purple-400 outline-double shadow-lg' : 'shadow-sm'
			}`}
			onClick={() => appState.setSelectedRegion(tabIndex)}
			role='button'
		>
			<p>{region}</p>

			<CircleIcon
				className={status === 'ok' ? 'text-green-500 ' : 'text-red-500 '}
			/>
		</div>
	)
}

export default Tab
