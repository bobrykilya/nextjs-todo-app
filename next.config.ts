import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	allowedDevOrigins: [
		'localhost',
		'192.168.1.12',
		'*.local-origin.dev'
	],
	devIndicators: false,
}

export default nextConfig
