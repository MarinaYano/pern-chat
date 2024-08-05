import { io } from 'socket.io-client';

io('http://localhost:4000');

const Home = () => {
  return <div>Home</div>;
};

export default Home;
