export interface Image {
    id: string;
    urls: {
        full: string,
        regular: string,
        small: string,
        small_s3: string
    },
    width: number
  }