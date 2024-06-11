import Button from "./Button";

export default function ConfirmDetail({ msg, onClose }) {
  return (
    <div className="flex flex-col p-2">
      <div className="pt-6 pb-8 text-lg text-white text-center">{msg}</div>
      <div className="flex px-2 gap-4">
        <Button bg="noBtn" onClick={onClose}>
          <div className="text-lg font-bold">No</div>
        </Button>
        <Button color="white">
          <div className="text-lg font-bold">Yes</div>
        </Button>
      </div>
    </div>
  );
}
