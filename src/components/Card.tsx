import { CardStat } from '../types'
import CircleIcon from '@mui/icons-material/Circle'

const BooleanStat = ({ value }: { value: boolean }) => {
	return <CircleIcon className={value ? 'text-green-500 ' : 'text-red-500 '} />
}
const isBoolean = (value: unknown) => typeof value === 'boolean'

const Card = ({ stats }: { stats: CardStat }) => {
	return (
		<div className='bg-white rounded-lg shadow-md p-6 my-6'>
			<h2 className='body'>{stats.title}</h2>

			{stats.contents.map(({ key, value }: Record<string, unknown>) => (
				<div className='flex justify-between items-center py-2'>
					<p className='subtitle'>{key as string}</p>
					{isBoolean(value) ? (
						<BooleanStat value={value as boolean} />
					) : (
						<p className='subtitle'>{value as string}</p>
					)}
				</div>
			))}
		</div>
	)
}

export default Card
