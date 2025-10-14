import nextPWA from "next-pwa";
/** @type {import('next').NextConfig} */
const isMobile = process.env.NEXT_PUBLIC_IS_MOBILE === 'true';
const withPWA = nextPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
})
const nextConfig = withPWA({
    reactStrictMode: true,
});

export default nextConfig;