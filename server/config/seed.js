import { pool } from './database.js';

const seedData = async () => {
  try {
    // Insert locations
    await pool.query(`
      INSERT INTO locations (name, address, city, state, zip, image) VALUES
      ('Echo Lounge', '123 Main St', 'Dallas', 'TX', '75201', 'https://media.architecturaldigest.com/photos/59a838a9a8a79c392f89eba2/master/w_1600%2Cc_limit/GettyImages-481686221.jpg'),
      ('House of Blues', '2200 N Lamar St', 'Dallas', 'TX', '75202', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt03CkwALEZLGc-9DSyD7r8pyN3wI6MjMqKg&s'),
      ('Pavilion', '1001 Performance Pl', 'Dallas', 'TX', '75210', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkXUeciNE7_pLWaKpGkTlYHVuRqHipboIVQ&s'),
      ('American Airlines', '2500 Victory Ave', 'Dallas', 'TX', '75219', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/American_Airlines_Center_August_2015.jpg');
    `);

    // Insert events with properly formatted dates and times
    await pool.query(`
      INSERT INTO events (title, date, time, location_id, image) VALUES
      ('Dream Theater', '2024-11-15', '19:00:00', 1, 'https://cdn.wegow.com/media/artists/dream-theater/dream-theater-1526479157.38.jpg'),
      ('Tool', '2024-11-20', '20:00:00', 2, 'https://hips.hearstapps.com/hmg-prod/images/index-1568322505.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*'),
      ('Snarky Puppy', '2024-11-25', '18:00:00', 3, 'https://lh3.googleusercontent.com/a13QqDJIeVtU276xEulufYxiltDgFa2IgJV9INmrNLr-2w555T4Qe0ntp90zQo7twgsRVz0m-immXgsb=w2880-h1200-p-l90-rj'),
      ('Polyphia', '2024-11-30', '21:00:00', 4, 'https://r2.theaudiodb.com/images/media/artist/thumb/sbaaqk1667051556.jpg'),
      ('Unprocessed', '2024-12-01', '18:00:00', 2, 'https://www.unprocessed.band/wp-content/themes/unprocessed/img/unprocessed-banner-top.jpg'),
      ('Alice Phoebe Lou', '2024-09-03', '18:00:00', 4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Alice_Phoebe_Lou_08.jpg/640px-Alice_Phoebe_Lou_08.jpg'),
      ('Aurora', '2024-09-21', '18:00:00', 3, 'https://indiehoy.com/wp-content/uploads/2024/05/AURORA-PRESS-IMAGE-1.jpeg'),
      ('Men I Trust', '2024-09-01', '18:00:00', 2, 'https://i.ytimg.com/vi/9IZKcb3LndA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBU9jMnlVVu6uBWzIKWwMrOMSTJCQ'); 
    `);

    console.log('Data seeded successfully!');
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
};

seedData();
