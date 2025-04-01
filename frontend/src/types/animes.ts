export type animesTp = {
    mal_id: number;
    title: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
};
export type animeResponse = {
    data: animesTp[]
}