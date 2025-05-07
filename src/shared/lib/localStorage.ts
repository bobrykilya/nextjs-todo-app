//! Remove?

export const getLS = <T = any>(nameLS: string) => {
	return localStorage?.getItem(nameLS) as T
}

export const setLS = (nameLS: string, data: any) => {
	localStorage?.setItem(nameLS, data)
}