import { useContext } from 'react'
import AppContext from '../context'
import { Tab } from './index'
const TabPanel = () => {
	const appState = useContext(AppContext)
	if (!appState) {
		return <></>
	}
	return (
		<section className='flex flex-col flex-wrap sm:flex-row sm:gap-4'>
			{appState.data?.map((region, index) => (
				<Tab tabIndex={index} region={region.region} status={region.status} />
			))}
		</section>
	)
}

export default TabPanel
