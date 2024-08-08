import MessageHeader from '../message/MessageHeader';
import MessageList from '../message/MessageList';

const MessageContainer = () => {
  const isRoomSelected = true;

  return (
    <>
      {isRoomSelected ? (
        <div className="grow border-l border-gray-100 shadow-md">
          <MessageHeader />
          <MessageList />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full border-l border-gray-100 shadow-md h-screen">
          <p className="text-xl font-semibold text-center w-full">
            Welcome to Pern Chat!👋
          </p>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
