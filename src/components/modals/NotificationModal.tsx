import Button from "@/components/ui/Button";
import { ModalProps } from "@/types/modal-props.type";
import { NotificationType } from "@/types/notification.type";
import { cn } from "@/utils/cn";
import useNotificationMessage from "../hooks/useNotificationMessage";
import Modal from "./Modal";

interface NotificationModalProps extends ModalProps {
  type: NotificationType;
}

export default function NotificationModal({
  close,
  isOpen,
  type,
}: NotificationModalProps) {
  const { title, description } = useNotificationMessage(type);

  return (
    <Modal.Overlay isOpen={isOpen}>
      <Modal>
        <Modal.Title className={cn("mb-10", { "mb-5": description })}>
          {title}
        </Modal.Title>
        {description && (
          <Modal.Description className="mb-10">{description}</Modal.Description>
        )}
        <div className="flex gap-5 justify-center">
          <Button
            variant="black"
            onClick={close}
            className="px-10"
            type="button"
          >
            Oк
          </Button>
        </div>
      </Modal>
    </Modal.Overlay>
  );
}
