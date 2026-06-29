/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/academy/finance',
        destination: '/academy/administracion',
        permanent: true,
      },
      {
        source: '/academy/finance/:path*',
        destination: '/academy/administracion/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
