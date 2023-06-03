import React, { FC } from "react";

import Avatar from "@/components/common/Avatar";
import IconButton from "@/components/ui/IconButton";
import TrashIcon from "@/components/icons/TrashIcon";

interface Props {
  image: string;
  imageId: string;
  handleDelete: ()=>void
}

const DeleteableImage: FC<Props> = ({ image, imageId, handleDelete }) => {
  return (
    <div className="relative w-[100px] h-[100px]">
      <Avatar imageUrl={image} fallBack="C" shape="square" size="lg" />
      <div className="absolute top-[5px] right-[25px] z-30">
        <IconButton
          handleClick={handleDelete}
          icon={<TrashIcon width="12" height="12" fill="#EF2C5B" />}
          className="!w-6 !h-6 !bg-[#FFF]"
        />
      </div>
    </div>
  );
};

export default DeleteableImage;
