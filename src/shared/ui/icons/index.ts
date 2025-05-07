import { BsMoonStarsFill } from 'react-icons/bs'
import { PiSunDimFill } from 'react-icons/pi'
import { TiArrowUpThick } from 'react-icons/ti'



export const ICONS = {
	moon: BsMoonStarsFill,
	sun: PiSunDimFill,
	submit: TiArrowUpThick,
}

export type IconOptions = keyof typeof ICONS