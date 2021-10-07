class Cloudinary {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  upload = async (file) => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "vsfic46d");
    const response = await this.httpClient.post(
      `${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      form
    );
    return response.data;
  };
}
export default Cloudinary;
