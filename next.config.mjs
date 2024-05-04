/** @type {import('next').NextConfig} */
const nextConfig = {
  // 합치려는 설정에서 가져온 옵션들
  reactStrictMode: true,
  output: "export", // Outputs a Single-Page Application (SPA).
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

    return config;
  },
};

export default nextConfig;
