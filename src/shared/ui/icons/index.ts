import { BsMoonStarsFill } from 'react-icons/bs'
import { PiSunDimFill } from 'react-icons/pi'



export const ICONS = {
	moon: BsMoonStarsFill,
	sun: PiSunDimFill,
}

export type IconOptions = keyof typeof ICONS