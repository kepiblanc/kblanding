import React, { FC } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/ui/Button/Button";
import useClickOutside from "@/hooks/useClickOutside";

interface Props {
  handleClose: () => void;
  handleIDoNotConfirm: ()=>void
}

const ConfirmationCard: FC<Props> = ({ handleClose, handleIDoNotConfirm }) => {
  const ref = useClickOutside<HTMLDivElement>(() => handleClose());

  return (
    <Card maxWidth="400px">
      <div className="flex flex-col gap-5" ref={ref}>
        <p className="text-center font-medium">Don't confirm Guarantor</p>

        <p className="text-center text-base">
          Are you sure you do not confirm this guarantor? This action cannot be
          undone
        </p>

        <div className="flex items-center justify-center gap-3">
          <Button title="Cancel" className="w-[50%]" onClick={handleClose}/>
          <Button
            title="I do not confirm"
            className="w-[50%] !text-[#EF2C5B]"
            color="tetiary"
            onClick={handleIDoNotConfirm}
          />
        </div>
      </div>
    </Card>
  );
};

export default ConfirmationCard;
