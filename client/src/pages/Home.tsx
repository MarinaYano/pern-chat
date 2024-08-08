import { io } from 'socket.io-client';
import RoomContainer from '../components/layout/RoomContainer';
import MessageContainer from '../components/layout/MessageContainer';

io('http://localhost:4000');

const Home = () => {
  return (
    <div className="flex w-full">
      <RoomContainer />
      <MessageContainer />
    </div>
  );
};

export default Home;
