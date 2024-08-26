import { useContext } from 'react'
import AppContext from '../context'
import { CardStat } from '../types/index'
import { Card } from './index'

const CardPanel = () => {
	const appState = useContext(AppContext)
	if (!appState) {
		return <></>
	}
	return (
		<section>
			{appState.selectedRegion !== null &&
				appState.data?.[appState.selectedRegion].stats?.map(
					(stat: CardStat) => <Card stats={stat} />
				)}
		</section>
	)
}

export default CardPanel
