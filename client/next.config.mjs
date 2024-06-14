/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname:
          "/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg",
      },
      {
        hostname: "static.vecteezy.com",
        port: "",
        pathname:
          "/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg",
      },
    ],
  },
};

export default nextConfig;
