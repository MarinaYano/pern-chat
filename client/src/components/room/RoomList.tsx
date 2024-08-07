import RoomItem from './RoomItem';

const RoomList = () => {
  return (
    <div className="px-3 py-4">
      <h3 className="text-lg font-semibold mb-2 pl-4">Your Chat Rooms</h3>
      <div className="space-y-2">
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </div>
    </div>
  );
};

export default RoomList;
