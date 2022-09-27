import { useState } from "react";
import { BigButton, CropImage, Heading, Stack } from "~/components";

export const Home = () => {
  const [images, setImages] = useState<FileList | null>(null);
  return (
    <Stack>
      <Heading family="decorative" size="4xl" weight="600">
        Omen Art Tool
      </Heading>
      <BigButton>Dialog???</BigButton>
      <input
        type="file"
        multiple
        name="myImage"
        onChange={(event) => {
          setImages(event.target.files);
        }}
      />
      {images &&
        Array.from(images).map((image) => (
          <CropImage key={image.name} image={image} />
        ))}
    </Stack>
  );
};
