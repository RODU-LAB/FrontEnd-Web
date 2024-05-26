/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`,

  // Webpack 설정 추가
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|mov|avi|mkv)$/, // 처리할 파일 형식 지정
      use: "file-loader", // file-loader로 파일 처리
    });

    // svgr 관련 설정 추가
    config.module.rules.push({
      test: /\.svg$/, // .svg 파일 처리
      use: ["@svgr/webpack"], // svgr로 파일 처리
    });

    // video 관련 설정 추가
    config.module.rules.push({
      test: /\.(mov|mp4)$/, //
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
