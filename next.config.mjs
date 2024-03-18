/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: process.env.IMAGES_URL
        }]
    }
};

export default nextConfig;
