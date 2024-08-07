import { Box, useTheme } from '@mui/material';

const RoomItem = () => {
  const theme = useTheme();

  return (
    <div className="flex flex-col">
      <Box
        // sx={{
        //   backgroundColor:
        //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        // }}
        className="flex items-center gap-x-4 px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer"
      >
        <div className="relative">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="avatar"
            className="w-16 object-cover"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Room Name</h4>
            <span className="text-xs text-gray-400 font-medium">8:37 PM</span>
          </div>
          <p
            className={`text-sm font-medium ${theme.palette.mode === 'dark' ? 'text-gray-200' : 'text-gray-500'}`}
          >
            Latest Message
          </p>
        </div>
      </Box>
    </div>
  );
};

export default RoomItem;
