export const getLSList = <T = any>(nameLS: string): T => {
	if (typeof window === 'undefined') {
		return [] as T
	}
	return JSON.parse(localStorage.getItem(nameLS) || '[]') as T
}

export const setLSList = (nameLS: string, data: any) => {
	try {
		localStorage.setItem(nameLS, JSON.stringify(data))
	} catch (err) {
		console.error(`Could not stringify data (${nameLS}): `, err)
	}
}