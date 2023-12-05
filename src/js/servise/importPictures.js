export default function importPictures(url) {
  const imageContext = require.context("../../assets", true, /\.(jpg)$/);

  return imageContext(url);
}
