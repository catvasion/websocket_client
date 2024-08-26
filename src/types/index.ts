export interface CardStat {
	title: string
	contents: {
		key: string
		value: unknown
	}[]
}

export interface Stat {
	stats: CardStat[]
	region: string
	status: string
}

export interface StatResponse {
	data: Stat[] | null
	error: {
		code: number
		message: string
	} | null
}
