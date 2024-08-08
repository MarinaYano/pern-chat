import { pool } from "./pool";
import bcrypt from "bcryptjs";

const admin = {
  username: "admin",
  display_name: "Admin",
  password: "password",
  avatar: null,
};

const testUser = {
  username: "test_user",
  display_name: "Test User",
  password: "password",
  avatar: null,
};

const JohnDoe = {
  username: "johndoe",
  display_name: "John Doe",
  password: "password",
  avatar: null,
};

const room1 = {
  name: "Jon Doe",
};

const insertData = async () => {
  try {
    const salt = await bcrypt.genSalt();
    const adminHashedPassword = await bcrypt.hash(admin.password, salt);
    const testUserHashedPassword = await bcrypt.hash(testUser.password, salt);
    const JohnDoeHashedPassword = await bcrypt.hash(JohnDoe.password, salt);

    admin.password = adminHashedPassword;
    testUser.password = testUserHashedPassword;
    JohnDoe.password = JohnDoeHashedPassword;

    await pool.query(
      "INSERT INTO users (username, display_name, hashed_password, avatar) VALUES ($1, $2, $3, $4) RETURNING *",
      [admin.username, admin.display_name, admin.password, null]
    );

    const createdTestUser = await pool.query(
      "INSERT INTO users (username, display_name, hashed_password, avatar) VALUES ($1, $2, $3, $4) RETURNING *",
      [testUser.username, testUser.display_name, testUser.password, null]
    );

    const createdJohnDoe = await pool.query(
      "INSERT INTO users (username, display_name, hashed_password, avatar) VALUES ($1, $2, $3, $4) RETURNING *",
      [JohnDoe.username, JohnDoe.display_name, JohnDoe.password, null]
    );

    const createdRoom = await pool.query(
      "INSERT INTO rooms (name) VALUES ($1) RETURNING *",
      [room1.name]
    );

    await Promise.all([
      await pool.query(
        "INSERT INTO user_rooms (room_id, user_id) VALUES ($1, $2) RETURNING *",
        [createdRoom.rows[0].id, createdTestUser.rows[0].id]
      ),
      await pool.query(
        "INSERT INTO user_rooms (room_id, user_id) VALUES ($1, $2) RETURNING *",
        [createdRoom.rows[0].id, createdJohnDoe.rows[0].id]
      ),
    ]);

    console.log("Seeding Completed!");
    pool.end();
  } catch (err) {
    console.error("Failed seeding data", err);
  }
};

insertData();
