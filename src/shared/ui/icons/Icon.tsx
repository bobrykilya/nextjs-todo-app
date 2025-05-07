import { IconOptions, ICONS } from './index'
import React from 'react'
import clsx from 'clsx'
import icon_styles from './Icon.module.sass'



type IconProps = {
	name: IconOptions;
	styles?: Partial<typeof icon_styles>;
	size?: number;
	className?: string;
}
const Icon = ({ name, styles, size = 20, className }: IconProps) => {

	const IconComponent = ICONS[name]


	return (
		<span
			className={clsx('g_cont', styles && styles.fa_icon_cont)}
		>
			<IconComponent
				className={clsx(icon_styles.fa_icon, styles && styles.fa_icon, className)}
				size={size}
			/>
		</span>
	)
}

export default Icon