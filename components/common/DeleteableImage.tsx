import React, { FC } from "react";

import Avatar from "@/components/common/Avatar";
import IconButton from "@/components/ui/IconButton";
import TrashIcon from "@/components/icons/TrashIcon";
import { motion } from "framer-motion";

interface Props {
  image: string;
  imageId: string;
  handleDelete: () => void;
}

const DeleteableImage: FC<Props> = ({ image, imageId, handleDelete }) => {
  return (
    <motion.div
      initial={{ scale: 1.2 }}
      whileInView={{
        scale: 1,
        transition: { duration: 0.4 },
      }}
      viewport={{ once: true }}
      className="relative w-[100px] h-[100px]"
    >
      <Avatar imageUrl={image} fallBack="C" shape="square" size="lg" />
      <div className="absolute top-[5px] right-[25px] z-30">
        <IconButton
          handleClick={handleDelete}
          icon={<TrashIcon width="12" height="12" fill="#EF2C5B" />}
          className="!w-6 !h-6 !bg-[#FFF]"
        />
      </div>
    </motion.div>
  );
};

export default DeleteableImage;
