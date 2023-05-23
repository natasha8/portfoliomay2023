/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["cdn.sanity.io", "i.ibb.co", "mega.nz", "drive.google.com"],
	},
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: [
			"tailwind-scrollbar-hide",
			"tailwind-scrollbar",
		],
	},
};

module.exports = nextConfig;
