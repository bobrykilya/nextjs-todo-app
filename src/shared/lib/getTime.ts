import { formatDistanceToNow } from 'date-fns'



export const getFormatTimeAgo = (timestamp: number) => {
	return formatDistanceToNow(new Date(timestamp), {
		addSuffix: true,
	})
}

export const getTimeInShortString = (timestamp: number) => {
	const date = new Date(timestamp)
	return date.toLocaleString()
}