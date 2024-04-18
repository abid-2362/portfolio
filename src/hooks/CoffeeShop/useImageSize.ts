import { useEffect, useState } from 'react';
import { Dimensions, Image } from 'react-native';

const useImageSize = (image: any) => {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imageUri = Image.resolveAssetSource(image).uri;

  useEffect(() => {
    // Fetch the image dimensions
    Image.getSize(imageUri, (width, height) => {
      // Get the dimensions of the device screen
      const screenWidth = Dimensions.get('window').width;

      // Calculate the aspect ratio of the image
      const aspectRatio = width / height;

      // Calculate the height of the image based on the screen width and aspect ratio
      const calculatedHeight = screenWidth / aspectRatio;

      // Set the image size state
      setImageSize({ width: screenWidth, height: calculatedHeight });
    });
  }, [imageUri]);

  return { imageSize };
};

export default useImageSize;
