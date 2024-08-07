import RoomList from '../room/RoomList';
import RoomsHeader from '../room/RoomsHeader';

const RoomContainer = () => {
  return (
    <div className="min-w-80">
      <RoomsHeader />
      <RoomList />
    </div>
  );
};

export default RoomContainer;
