const MessageHeader = () => {
  return (
    <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200 ">
      <img
        src="https://avatar.iran.liara.run/public/boy"
        alt="avatar"
        className="rounded-sm w-16 h-16"
      />
      <h3 className="text-lg font-semibold">Message: John Doe</h3>
    </div>
  );
};

export default MessageHeader;
