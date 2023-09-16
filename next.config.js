/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'https://sahalsooq.vercel.app/',
                port: '',
                pathname: "/**",
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: "/**",
            }
        ],
    }
}
module.exports = nextConfig
