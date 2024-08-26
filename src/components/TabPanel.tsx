import { useContext } from 'react'
import AppContext from '../context'
import { Tab } from './index'
const TabPanel = () => {
	const appState = useContext(AppContext)
	if (!appState) {
		return <></>
	}
	return (
		<div className='flex gap-4 flex-col sm:flex-row'>
			{appState.data?.map((region, index) => (
				<Tab tabIndex={index} region={region.region} status={region.status} />
			))}
		</div>
	)
}

export default TabPanel
