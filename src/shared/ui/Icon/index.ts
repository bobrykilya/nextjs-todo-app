import { BsCheck, BsMoonStarsFill } from 'react-icons/bs'
import { PiSunDimFill } from 'react-icons/pi'
import { TiArrowUpThick } from 'react-icons/ti'
import { IoArrowUndo } from 'react-icons/io5'
import { IoIosClose } from 'react-icons/io'



export const ICONS = {
	moon: BsMoonStarsFill,
	sun: PiSunDimFill,
	submit: TiArrowUpThick,
	complete: BsCheck,
	undo: IoArrowUndo,
	remove: IoIosClose,
}

export type IconOptions = keyof typeof ICONS