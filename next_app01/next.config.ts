import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async rewrites() {
    return [
      { source: '/home', destination: '/home'},
      { source: '/empresa', destination: '/about'},
      { source: '/servicos', destination: '/services'},
      { source: '/contato', destination: '/contact'},
    ]
  }

}

export default nextConfig;
