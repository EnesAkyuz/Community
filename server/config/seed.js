// server/config/seed.js
import { pool } from './database.js';

const seedData = async () => {
  try {
    // Insert locations
    await pool.query(`
      INSERT INTO locations (name, address, city, state, zip, image) VALUES
      ('Echo Lounge', '123 Main St', 'Dallas', 'TX', '75201', '/images/echo_lounge.jpg'),
      ('House of Blues', '2200 N Lamar St', 'Dallas', 'TX', '75202', '/images/house_of_blues.jpg'),
      ('Pavilion', '1001 Performance Pl', 'Dallas', 'TX', '75210', '/images/pavilion.jpg'),
      ('American Airlines Center', '2500 Victory Ave', 'Dallas', 'TX', '75219', '/images/americanairlines.jpg');
    `);

    // Insert events
    await pool.query(`
      INSERT INTO events (title, date, time, location_id, image) VALUES
      ('Concert A', '2023-10-15', '19:00', 1, '/images/concert_a.jpg'),
      ('Concert B', '2023-10-20', '20:00', 2, '/images/concert_b.jpg'),
      ('Concert C', '2023-10-25', '18:00', 3, '/images/concert_c.jpg'),
      ('Concert D', '2023-10-30', '21:00', 4, '/images/concert_d.jpg');
    `);

    console.log('Data seeded successfully!');
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
};

seedData();
