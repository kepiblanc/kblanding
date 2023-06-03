import React, { FC, useState, useRef } from "react";

import IconButton from "@/components/ui/IconButton";
import UserIcon from "@/components/icons/UserIcon";
import DeleteableImage from "@/components/common/DeleteableImage";
import { toast } from "react-toastify";

interface Props {
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>
}

const ImageUpload: FC<Props> = ({ image, setImage }) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [allowedMimeTypes, setAllowedMimeTypes] = useState([
    "image/jpeg",
    "image/png",
  ]);

  const getImageUrl = (img: File) => {
    const objectUrl = URL.createObjectURL(img);
    setImageUrl(objectUrl);
  };

  const validateImage = (img: File): boolean => {
    if (allowedMimeTypes.includes(img.type)) return true;
    else {
      return false;
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileRef}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.length) {
            const img = e.target.files[0];
            if (validateImage(img)) {
              getImageUrl(img);
              setImage(img);
            }
            else toast.error('Upload a valid image')
          }
        }}
      />
      {!image && !imageUrl && (
        <div>
          <p className="text-xs mb-4">Upload your image</p>

          <div>
            <IconButton
              icon={<UserIcon />}
              color="primary"
              className="!w-[60px] !h-[60px]"
              handleClick={() => {
                fileRef.current?.click();
              }}
            />
          </div>
        </div>
      )}
      {image && imageUrl && (
        <DeleteableImage
          handleDelete={() => {
            setImage(null);
            setImageUrl(null);
            if (fileRef.current?.value) {
              fileRef.current.value = "";
            }
          }}
          image={imageUrl}
          imageId="1"
        />
      )}
    </>
  );
};

export default ImageUpload;
