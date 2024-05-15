// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.pdf$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
                {
                    loader: 'pdf-loader',
                },
            ],
        });
        return config;
    },
};

export default nextConfig;
