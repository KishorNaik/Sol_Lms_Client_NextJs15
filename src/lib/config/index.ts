interface IConfig {
  env: {
    apiEndpoint: string;
    imageKit: {
      publicKey: string;
      privateKey: string;
      urlEndpoint: string;
    };
    databaseUrl: string;
  };
}

const config: IConfig = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || "",
    imageKit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "",
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
    },
    databaseUrl: process.env.DATABASE_URL || "",
  },
};

export default config;
