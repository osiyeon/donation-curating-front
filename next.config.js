module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["https://sharing-giving.s3.ap-northeast-2.amazonaws.com/"]
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination:
          process.env.NODE_EN === "production"
            ? "http://ec2-15-164-87-12.ap-northeast-2.compute.amazonaws.com:8080"
            : "http://localhost:8080/:path*" // Proxy to Backend
      }
    ];
  }
};
