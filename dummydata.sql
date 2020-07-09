-- Last Updated Jul 8, 2020 10:48 AM

-- Update: Sundance Festival Picture, Removed Mock Users

------------------------------
------ INSERT TEST DATA ------
------------------------------

-- USERS --
INSERT INTO "user"
    (name, title, company, password, username, phone, access_level)
VALUES
    ('Karl Nauman', 'Founder', 'Sponsorship Hub', '$2a$10$3UXnDy01r8nA8H.Z9EN0IOoMCSYAdWdzGeol9yXLCLZC910lEua5C', 'lamportkn@gmail.com', '651-271-6542', 3);

-- EVENT --
INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id)
VALUES
    ('Second Sky Festival 2020', '2003', '2020-07-22 13:00:09.250411+00', '2020-08-02 20:30:09.250411+00', 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 'https://secretskyfest.com/', false, '12000', 'Second Sky Festival is annual', 'John Doe', '"event" Specialist', 'info.secondskyfest@goldenvoice.com', '855-838-3892', 'secondskyfest', 'secondskyfest', 'secondskyfest', 'Miscellaneous Notes!', 1);

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('Minnesota State Fair 2021', '1859', '2021-08-26 13:00:09.250411+00', '2021-09-06 20:30:09.250411+00', 'https://images.unsplash.com/photo-1568264523979-383b59b330c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80', 'https://www.mnstatefair.org/', false, '200000', 'Today, often referred to as the “Great Minnesota Get-Together,” the annual Minnesota State Fair is one of the most popular tourist destinations in the region. The fair attracts more than 2 million guests annually.

This end-of-summer tradition is held the 12 days leading up to and through Labor Day. The 2020 Minnesota State Fair, scheduled for Aug. 27-Sept. 7, has been canceled. Learn more. The 2021 Minnesota State Fair runs Aug. 26-Labor Day, Sept. 6.

The fair employs nearly 90 year-round full-time staff members. During the summer, about 450 seasonal staff are added. More than 2,300 people are hired as fair-time staff members.

Located mid-way between Minneapolis and St. Paul, the 322-acre Minnesota State Fairgrounds is renowned for its beautiful gardens and architecture reflecting the art deco and Works Progress Administration eras.

Hundreds of events are held on the fairgrounds throughout the year during the non-fair time, including horse and livestock competitions, merchandise sales, expositions, car shows and more.', 'Melissa Varriano', 'Sponsorship Supervisor', 'fairinfo@mnstatefair.org', '651-288-4306', 'minnesotastatefair', 'mnstatefair', 'mnstatefair', 'Nestled between the Twin Cities of Minneapolis and St. Paul, the Minnesota State Fair provides guaranteed visibility and maximum guest exposure. The Minnesota State Fair has the largest daily attendance of any fair or festival in the nation, giving you the opportunity to reach the maximum number of people in the minimum amount of time. Your company will benefit from public awareness of your product or service, sampling, couponing and retail sales activities.

The Minnesota State Fair is the ideal platform to reach more than two million potential customers in only 12 days (an average of more than 177,000 per day in 2019). Affectionately known as the Great Minnesota Get-Together, the fair’s ever-growing and loyal fan base is what makes this exhibition the “must-stop” destination for sponsors and mobile marketing units promoting across the country. Surveys reveal that a whopping 85% of guests visit the fair every year and an additional 12% visit every other year or every five years. The 2021 fair will run Thursday, Aug. 26 through Monday, Labor Day, Sept. 6.

This annual high-profile 12-day fair with a 150+-year history, features more than 900 entertainment performances on free stages plus a Grandstand stage presenting internationally known artists. Shop more than 1,200 exhibit booths, including 300 food vendors and dozens of sponsors and touring promotional exhibits. Visitors enjoy spectacular educational experiences at the award-winning Eco Experience, History & Heritage Center, Pet Pavilions, CHS Miracle of Birth Center and many other exhibits.

We invite you to join our many successful sponsors.  Sponsorship Application: https://assets.mnstatefair.org/pdf/20-sponsorship-application.pdf', 2, 'https://assets.mnstatefair.org/pdf/19-map-color.pdf');

INSERT INTO "event"
    -- Testing Null Data --
    (event_name, year_established, start_date, end_date, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('Spring Jam 2021', '1999', '2021-02-25 17:00:00.250411+00', '2021-03-01 23:00:00.250411+00', 'https://springjam.umn.edu/', false, '15000', 'Spring Jam is a one day music festival that brings the University of Minnesota and greater Twin-Cities communities together with live music, carnival rides, food, games and more!', 'Katie Alvino', 'Marketing Director', 'umn-sua-sponsor@umn.edu', 'umnSUA', 'umnsua', 'umnsua', 'EVENT INFO - Spring Jam brings University of Minnesota students together for a festival experience. Complete with free carnival rides, live music, and food, Spring Jam is the perfect welcome party for warm weather!

WHAT’S IN IT FOR YOU?
The University of Minnesota’s Spring Jam experience offers companies an exclusive opportunity to connect with the University population at one of the largest social events on campus!

OUR CAMPUS AUDIENCE
Total Enrollment: 52,000
Possible Overall Reach: 2,600,000

SPRING JAM REACH
Opportunity to interact with up to 7,000 students at Spring Jam.
Over 198,000 Spring Jam webpage views annually.
30,000 followers across Instagram, Twitter, Facebook, and Snapchat.', 3, 'https://springjam.umn.edu/sponsors/opportunities');

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id)
VALUES
    ('Coachella Music Festival 2021', '2011', '2021-04-09 13:00:09.250411+00', '2021-04-18 20:30:09.250411+00', 'https://images.unsplash.com/photo-1505224628533-c4fc42c389e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1192&q=80', 'https://www.coachella.com/', false, '99000', 'Like a barometer always reading a temperature of awesome, the traditional kickoff to the summer festival season is dominated by Coachella. The glitz and glamour of Los Angeles migrates east to the Indio desert for back to back weekends of the biggest names in music. What started as a small electronic festival in the desert has transformed into a cultural touchstone for the festival season.', 'Billy Blaze', 'Event Coordinator', 'sponsorship@coachella.com', '1-855-771-3667', 'coachella', 'coachella', 'coachella', 'Coachella was cancelled in October 2020 and pushed to April 2021.', 4);

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id)
VALUES
    ('Minnesota Craft Beer Festival', '2020', '2020-09-19 13:00:09.250411+00', '2020-09-19 17:00:09.250411+00', 'https://images.unsplash.com/photo-1554127959-b04104f23bab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80', 'https://www.minnesotacraftbeerfestival.com/', false, '1000', 'Limited-release beers, world-class breweries, unlimited pours, and live music in Minneapolis-St. Paul on September 19, 2020.', 'Julia S', 'Coordinator', 'steverogers@gmail.com', '612-305-7162', 'craftbeerandbrewing', 'craftbeerbrew', 'NA', 'Event has been pushed from April 25, 2020 to September 19, 2020', 5);

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('Boca Fest', '1986', '2021-01-09 10:00:09.250411+00', '2021-01-10 17:00:09.250411+00', 'https://unsplash.com/photos/5MTf9XyVVgM/download?force=true&w=1920', 'https://http://www.artfestival.com/festivals/annual-boca-fest/artist/', false, '1000', 'Boca Fest will be located in the lot at the intersection of St. Andrews Boulevard and Glades Road at The Town Center Mall. The Town Center is one of South Florida''s top luxury shopping destinations and one of Boca''s main attractions. It features a mix of upscale and elite specialty shops, fine dining and plenty of parking.', 'Howard Alan', 'Event Planner', 'info@artfestival.com', '561-746-6615', 'HowardAlanEvents', 'artfestivals', 'artfestivals', 'Howard Alan Events is excited to announce that Boca Fest will now take place at The Town Center Mall at Boca Raton. The Town Center is one of South Florida''s top luxury shopping destinations and one of Boca''s main attractions. The show will be located in the parking lot of The Terrace, a recent expansion near Bloomingdale''s, Pinon Grill, and The Gap. The Town Center is located right off I-95 and Glades Road.  The show offers a convenient location with over 150 national artists and plenty of parking, including valet! This outdoor gallery style juried event will present a variety of handmade art and unique gift items, as well as functional pieces. The eclectic displays, appealing to all tastes and budgets, will offer a wide array of artistic mediums including paintings, sculptures, photography, ceramics, glass, wood, handmade jewelry, and mixed media.', 6, 'https://www.zapplication.org/event-info.php?ID=8564');

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('San Diego Comic Con 2021', '2013', '2021-07-22 10:00:09.250411+00', '2021-07-25 17:00:09.250411+00', 'https://unsplash.com/photos/SLrcEdEpbSA/download?force=true&w=1920', 'https://www.comic-con.org/cci', false, '1000', 'The SAN DIEGO COMIC CONVENTION (Comic-Con International) is a California Nonprofit Public Benefit Corporation organized for charitable purposes and dedicated to creating the general public’s awareness of and appreciation for comics and related popular art forms, including participation in and support of public presentations, conventions, exhibits, museums and other public outreach activities which celebrate the historic and ongoing contribution of comics to art and culture.', 'John Howlett Jr.', 'Event Planner', 'info@comiccon.com', '561-746-3615', 'comiccon', 'comic_con', 'comic_con', 'From the beginning, the founders of the show set out to include not only the comic books they loved, but also other aspects of the popular arts that they enjoyed and felt deserved wider recognition, including films and science fiction/fantasy literature. After one more name change (San Diego’s West Coast Comic Convention, in 1972), the show officially became the San Diego Comic-Con (SDCC) in 1973 with the fourth annual event. In 1995, the non-profit event changed its name to Comic-Con International: San Diego (CCI).  The show''s main home in the 1970s was the fondly remembered El Cortez Hotel in downtown San Diego. In 1979, Comic-Con moved to the Convention and Performing Arts Center (CPAC), and stayed there until 1991, when the new San Diego Convention Center opened. Comic-Con has been at home in that facility for over two decades.  With attendance topping 130,000 in recent years—in a convention center facility that has maxed out in space—the event has grown to include satellite locations, including local hotels and outdoor parks. Programming events, games, anime, the Comic-Con International Independent Film Festival, and the Eisner Awards all take place outside of the Convention Center, creating a campus-type feel for the convention in downtown San Diego.  Over the years, Comic-Con has become the focal point for the world of comics conventions. The event continues to offer the complete convention experience: a giant Exhibit Hall (topping over 460,000 square feet in its current incarnation); a massive programming schedule (close to 700 separate events in 2014), featuring comics and all aspects of the popular arts, including hands-on workshops and educational and academic programming such as the Comics Arts Conference; anime and film screenings (including a separate film festival); games; the Will Eisner Comic Industry Awards, the “Oscars” of the comics industry; a Masquerade costume competition with prizes and trophies; an Autograph Area; an Art Show; and Portfolio Reviews, bringing together aspiring artists with major companies.  Comic-Con has presented literally thousands of special guests at its conventions over the years, bringing comics creators, science fiction and fantasy authors, film and television directors, producers, and writers, and creators from all aspects of the popular arts together with their fans for a fun and often times candid discussion of various art forms. The event has seen an amazing array of comics and book publishers in its Exhibit Hall over the years. Over it’s four-and-a-half decade-plus history, Comic-Con International has continually presented comic books and comic art to a growing audience. That love of the comics medium continues to be its guiding factor as the event moves toward its second half-century as the premier comic book and popular arts style convention in the world.', 7, 'https://www.comic-con.org/sites/default/files/forms/cci2020_exhapp_v2_1.pdf');


-- VENUES --
INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Middle Harbor Shoreline Park', '2777 Middle Harbor Rd', 'Oakland', 'California', '94607', 'Huge Park located by the shoreline', '5000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Minnesota State Fairgrounds', '1265 Snelling Ave N', 'St. Paul', 'Minnesota', '55108', 'The location of the Great Minnesota Get-Together.  Shuttles are provided during the State Fair.  During the offseason, the Grandstand is used for many events.', '100000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('The Armory', '500 South 6th St.', 'Minneapolis', 'Minnesota', '55415', 'The Armory is poised to make a triumphant return. The venue has returned to it''s roots - being the host to a number of social functions: concerts, sporting event, trade shows, and other private celebrations.', '8400');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Empire Polo Club', '81-800 Avenue 51', 'Indio', 'California', '92201', 'The location of Coachella.', '200000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Minneapolis Convention Center', '1301 2nd Avenue South', 'Minneapolis', 'Minnesota', '55403', 'Hall E', '2000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Town Center Mall', '5590 Glades Road', 'Boca Raton', 'Florida', '33431', 'The Town Center is one of South Florida''s top luxury shopping destinations and one of Boca''s main attractions. It features a mix of upscale and elite specialty shops, fine dining and plenty of parking.  The Town Center features over 200 stores including Tory Burch, Tiffany & Co, Louis Vuitton, The Apple Store and many more.', '3000');

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('San Diego Convention Center', '111 W Harbor Dr', 'San Diego', 'California', '92101', 'The San Diego Convention Center is the primary convention center in San Diego, California. It is located in the Marina district of downtown San Diego near the Gaslamp Quarter, at 111 West Harbor Drive. The center is managed by the San Diego Convention Center Corporation, a non-profit public benefit corporation created by the City of San Diego.', '125000');

-- SPONSORSHIP PACKAGES --   
INSERT INTO "sponsorships"
    (sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id)
VALUES
    ('Small Booth', '1000', 'https://images.unsplash.com/photo-1563208085-648526fc0a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A small booth, 6 by 6 feet', 1),
    ('Medium Booth', '1500', 'https://images.unsplash.com/photo-1553858117-30fb2c04eaad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80', 'A medium booth, 10 by 10 feet', 1),
    ('Large Booth', '2000', 'https://images.unsplash.com/photo-1581420515590-cee76de451b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80', 'A large booth, 16 by 16 feet', 1),
    ('Billboard (Small)', '15000', 'https://images.unsplash.com/photo-1559227582-558eeaccd1fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'Rent a small billboard near the Grandstand for the duration of the fair. The size of the billboard is 18 by 12 feet. Limit 4. More information can be found at: https://www.mnstatefair.com/sponsorship/sm_bb', 2),
    ('Billboard (Large)', '17000', 'https://images.unsplash.com/photo-1561898329-9ad7d76fbb2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'Rent a large billboard near the Grandstand for the duration of the fair.  The size of the billboard is 24 by 18 feet.  Limit 2.  More information can be found at: https://www.mnstatefair.org/get-involved/sponsorship/', 2),
    ('Booth (Small)', '22000', 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2016/png/iconmonstr-weather-117.png&r=0&g=0&b=0', 'Rent a small booth near the Bazaar for the duration of the fair.  The size of the booth is 24 by 18 feet.  Limit 2.  More information can be found at: https://www.mnstatefair.org/get-involved/sponsorship/', 2),
    ('Booth (Large)', '25000', 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2016/png/iconmonstr-weather-116.png&r=0&g=0&b=0', 'Rent a large booth near the Bazaar for the duration of the fair.  The size of the booth is 24 by 18 feet.  Limit 2.  More information can be found at: https://www.mnstatefair.org/get-involved/sponsorship/', 2),
    ('Small Booth', '1000', 'https://images.unsplash.com/photo-1573376670774-4427757f7963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80', 'A small booth, 6 by 6 feet', 3),
    ('Medium Booth', '1500', 'https://images.unsplash.com/photo-1553858117-30fb2c04eaad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80', 'A medium booth, 10 by 10 feet', 3),
    ('Large Booth', '2000', 'https://images.unsplash.com/photo-1581420515590-cee76de451b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80', 'A large booth, 16 by 16 feet', 3),
    ('Small Billboard', '1500', 'https://images.unsplash.com/photo-1559227582-558eeaccd1fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A small billboard, 6 by 12 feet', 4),
    ('Large Billboard', '2500', 'https://images.unsplash.com/photo-1561898329-9ad7d76fbb2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A large billboard, 20hx40w feet', 4),
    ('Small Booth', '1000', 'https://images.unsplash.com/photo-1573376670774-4427757f7963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80', 'A small booth, 6 by 6 feet', 4),
    ('Medium Booth', '1500', 'https://images.unsplash.com/photo-1553858117-30fb2c04eaad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80', 'A medium booth, 10 by 10 feet', 4),
    ('Large Booth', '2000', 'https://images.unsplash.com/photo-1581420515590-cee76de451b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80', 'A large booth, 16 by 16 feet', 4),
    ('Small Booth', '1000', 'https://images.unsplash.com/photo-1563208085-648526fc0a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A small booth, 6 by 6 feet', 5),
    ('Single Booth 10''x10''', '495', 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2017/png/iconmonstr-building-43.png&r=0&g=0&b=0', 'A large booth, 10 by 10 feet', 6),
    ('Double Booth', '990', 'https://cdns.iconmonstr.com/wp-content/assets/preview/2017/96/iconmonstr-building-13.png', 'Limited Quantity', 6);

------------------------------
------ INSERT JUNCTIONS ------
------------------------------

---- VENUE JUNCTIONS --
--
--INSERT INTO junction_event_venue
--    (venues_id, event_id)
--VALUES
--    (1, 1), (2, 2), (3, 3), (4, 4), (5, 5);

-- EVENT TYPE JUNCTION --
INSERT INTO "junction_event_type"
    (type_id, event_id)
VALUES
    (9, 1),
    (10, 2),
    (9, 3),
    (9, 4),
    (3, 5),
    (1, 6),
    (1, 7);

-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (1, 1, 40),
    (1, 2, 40),
    (1, 3, 20),
    (2, 1, 60),
    (2, 2, 30),
    (2, 3, 10),
    (3, 1, 50),
    (3, 2, 30),
    (3, 3, 20),
    (4, 1, 35),
    (4, 2, 45),
    (4, 3, 20),
    (5, 1, 35),
    (5, 2, 45),
    (5, 3, 20),
    (6, 1, 40),
    (6, 2, 45),
    (6, 3, 25),
    (7, 1, 49),
    (7, 2, 49),
    (7, 3, 2);

-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (1, 1, 50),
    (1, 2, 50),
    (2, 1, 40),
    (2, 2, 60),
    (3, 1, 25),
    (3, 2, 75),
    (4, 1, 15),
    (4, 2, 85),
    (5, 1, 85),
    (5, 2, 15),
    (6, 1, 75),
    (6, 2, 25),
    (7, 1, 49),
    (7, 2, 51);

-- DEMO INCOME JUNCTION --
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (1, 1, 10),
    (1, 2, 15),
    (1, 3, 15),
    (1, 4, 20),
    (1, 5, 20),
    (1, 6, 15),
    (1, 7, 5),
    (2, 1, 5),
    (2, 2, 25),
    (2, 3, 30),
    (2, 4, 20),
    (2, 5, 10),
    (2, 6, 5),
    (2, 7, 5),
    (3, 1, 0),
    (3, 2, 5),
    (3, 3, 5),
    (3, 4, 10),
    (3, 5, 20),
    (3, 6, 35),
    (3, 7, 25),
    (4, 1, 10),
    (4, 2, 45),
    (4, 3, 20),
    (4, 4, 15),
    (4, 5, 6),
    (4, 6, 4),
    (4, 7, 0),
    (5, 1, 10),
    (5, 2, 45),
    (5, 3, 20),
    (5, 4, 15),
    (5, 5, 6),
    (5, 6, 4),
    (5, 7, 0),
    (6, 1, 10),
    (6, 2, 45),
    (6, 3, 20),
    (6, 4, 15),
    (6, 5, 6),
    (6, 6, 4),
    (6, 7, 0),
    (7, 1, 15),
    (7, 2, 40),
    (7, 3, 25),
    (7, 4, 15),
    (7, 5, 4),
    (7, 6, 1),
    (7, 7, 0);

-- DEMO AGE JUNCTION --
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (1, 1, 0),
    (1, 2, 25),
    (1, 3, 25),
    (1, 4, 10),
    (1, 5, 20),
    (1, 6, 15),
    (1, 7, 5),
    (2, 1, 5),
    (2, 2, 15),
    (2, 3, 20),
    (2, 4, 20),
    (2, 5, 10),
    (2, 6, 15),
    (2, 7, 15),
    (3, 1, 0),
    (3, 2, 0),
    (3, 3, 10),
    (3, 4, 10),
    (3, 5, 20),
    (3, 6, 35),
    (3, 7, 25),
    (4, 1, 20),
    (4, 2, 45),
    (4, 3, 15),
    (4, 4, 10),
    (4, 5, 5),
    (4, 6, 5),
    (4, 7, 0),
    (5, 1, 25),
    (5, 2, 40),
    (5, 3, 25),
    (5, 4, 10),
    (5, 5, 0),
    (5, 6, 0),
    (5, 7, 0),
    (6, 1, 26),
    (6, 2, 39),
    (6, 3, 25),
    (6, 4, 7),
    (6, 5, 3),
    (6, 6, 0),
    (6, 7, 0),
    (7, 1, 13),
    (7, 2, 42),
    (7, 3, 25),
    (7, 4, 15),
    (7, 5, 4),
    (7, 6, 1),
    (7, 7, 0);


-- EVENT Grillfest 2020 -- 

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('CHS Field, Home of the St. Paul Saints,', '360 N Broadway St', 'St Paul', 'Minnesota', '55101', 'CHS Field is conveniently located off of I-94 and HWY 52 at 360 Broadway Street, St. Paul, MN 55101. There is ample metered street parking, local city ramps, and surface lots. If driving isn''t your thing, you can take MetroTransit right to CHS Field. There are over 15 bus lines that stop by CHS Field as well as the green line!', '7210');

INSERT INTO "event"
    (event_name, year_established,
    start_date, end_date, event_image_url, event_website, event_status, estimated_attendance,
    event_description, contact_name, contact_title, contact_email, contact_phone, event_notes, venue_id)
VALUES
    ('Grillfest 2020', '2011', '2020-10-02 13:00:09.250411+00', '2020-10-04 20:30:09.250411+00', 'https://img.texasmonthly.com/2020/01/11.3-TM-BBQ-Fest-54.jpg?auto=compress&crop=faces&fit=fit&fm=jpg&h=0&ixlib=php-1.2.1&q=45&w=800', 'https://grillfestival.com/', FALSE, '20000',
        'THIS EVENT IS 21+. We cannot admit anyone without a valid ID. NO ONE UNDER 21 WILL BE ALLOWED IN THE EVENT.
    Re-mark your calendars! The 9th annual Grillfest is still up to bat at CHS Field—just a little farther down the lineup. With new fall dates of Saturday and Sunday, October 3 & 4 from 1-5 p.m. each day, we have that much more time to get excited about the hottest grills, recipes, barbecue techniques, burgers, beer, and more that the Twin Cities could ever pack into one weekend-long, all-inclusive event.
It''s the same event you''ve come to know and love—at the same location, with the same hours, boasting the same caliber of excellence (and bold flavor) that you deserve. The only changes? The air will be a little brisker, flannels will be a little easier to spot, and excitement will be cooking.',
        'Arthur Morrissey', 'Event Specialist', 'amorrissey@greenspring.com', '612-838-3892', 'Previous ticket holders: Tickets purchased for Saturday, May 2, will be valid and accepted on Saturday, October 3. Tickets purchased for Sunday, May 3, will be valid and accepted on Sunday, October 4. Ticket prices remain the same.
If you prefer a refund at this time, please contact Arthur Morrissey at amorrissey@greenspring.com.', 8);

INSERT INTO "sponsorships"
    (sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id)
VALUES
    ('Small Booth', '1000', 'https://images.unsplash.com/photo-1563208085-648526fc0a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'A small booth, 6 by 6 feet', 8),
    ('Medium Booth', '1500', 'https://images.unsplash.com/photo-1553858117-30fb2c04eaad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80', 'A medium booth, 10 by 10 feet', 8),
    ('Large Booth', '2000', 'https://images.unsplash.com/photo-1581420515590-cee76de451b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80', 'A large booth, 16 by 16 feet', 8),
    ('Single Booth 10''x10''', '495', 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2017/png/iconmonstr-building-43.png&r=0&g=0&b=0', 'A large booth, 10 by 10 feet', 8),
    ('Double Booth', '990', 'https://cdns.iconmonstr.com/wp-content/assets/preview/2017/96/iconmonstr-building-13.png', 'Limited Quantity', 8);
INSERT INTO "junction_event_type"
    (type_id, event_id)
VALUES
    (7, 8);
-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (8, 1, 55),
    (8, 2, 35),
    (8, 3, 10);
-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (8, 1, 90),
    (8, 2, 10);
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (8, 1, 10),
    (8, 2, 15),
    (8, 3, 40),
    (8, 4, 10),
    (8, 5, 10),
    (8, 6, 10),
    (8, 7, 5);
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (8, 1, 0),
    (8, 2, 25),
    (8, 3, 30),
    (8, 4, 20),
    (8, 5, 15),
    (8, 6, 5),
    (8, 7, 5);

-- EVENT --

INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Las Vegas Convention Center', '3150 Paradise Road', 'Las Vegas', 'Nevada', '89109', 'The Las Vegas Convention Center is a government building in Winchester, Nevada. It is owned and operated by the Las Vegas Convention and Visitors Authority. Being one of the largest convention centers in the world with 1,940,631 sq ft of exhibit space, it hosts shows with an estimated 200,000 participants.', '200000');-- Create Event --
INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('SEMA Show', '1963', '2021-11-02 09:00:09.250411+00', '2021-11-05 06:00:09.250411+00', 'https://images.unsplash.com/photo-1584909899743-7edd5ad87afc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80', 'https://www.semashow.com/', False, '600000', 'The SEMA Show is the premier automotive specialty products trade event in the world segmented into 12 sections with over 2,400 exhibitors and a New Product Showcase featuring nearly 3,000 newly introduced parts, tools and components. The SEMA Show draws the industrys brightest minds, hottest products and over 70,000 domestic and international buyers to one place, the Las Vegas Convention Center. In addition, the SEMA Show provides attendees with educational seminars, product demonstrations, special events, networking opportunities and more.', 'Brendan Gillespie', 'New Business Sales', 'brendang@sema.org', '909-978-6661', 'semashow', 'SEMASHOW', 'semashow', 'The SEMA Show offers an attendee experience like no other trade show on the planet. Its the best place to see the newest automotive performance products, discover the latest product and vehicle trends, and develop essential skills by attending any of the free education sessions – all of which are led by top industry professionals.', '9', 'https://www.semashow.com/sites/default/files/pdfs/advertising-sponsorships.pdf');
-- USE VENUE ID FROM ABOVE INSERT-- Event Type --
INSERT INTO "junction_event_type"
    (event_id, type_id)
VALUES
    (9, 2);

-- Sponsors --
INSERT INTO "sponsorships"
    (sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id)
VALUES
    ('Aisle Sign Logo', '950', 'https://www.tpgliveevents.com/wp-content/uploads/2016/10/booth-signage.jpg', 'Placement of your company logo on both sides of the selected aisle sign(s). Specific aisles may be requested.', 9)
;-- DEMO AGE JUNCTION --
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (9, 1, 10),
    (9, 2, 15),
    (9, 3, 20),
    (9, 4, 15),
    (9, 5, 20),
    (9, 6, 15),
    (9, 7, 5);
-- Replace first number with event id, third number with %-- DEMO INCOME JUNCTION --
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (9, 1, 5),
    (9, 2, 15),
    (9, 3, 25),
    (9, 4, 20),
    (9, 5, 20),
    (9, 6, 10),
    (9, 7, 10);
-- Replace first number with event id, third number with %-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (9, 1, 60),
    (9, 2, 35),
    (9, 3, 5);
-- Replace first number with event id, third number with %-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (9, 1, 20),
    (9, 2, 80);
-- Replace first number with event id, third number with %



-- Create Venue --
INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('The Playa', '40°45’13.83″N, 119°16’37.20″W', 'Black Rock City', 'Nevada', '89412', 'The Black Rock Desert is a semi-arid region (in the Great Basin shrub steppe eco-region), of lava beds and playa, or alkali flats, situated in the Black Rock Desert–High Rock Canyon Emigrant Trails National Conservation Area, a silt playa 100 miles (160 km) north of Reno, Nevada that encompasses more than 300,000 acres (120,000 ha) of land and contains more than 120 miles (200 km) of historic trails. It is in the northern Nevada section of the Great Basin with a lakebed that is a dry remnant of Pleistocene Lake Lahontan.', '78820');
-- Create Event --
INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('Burning Man 2021', '1998', '2020-08-30', '2020-09-07', 'https://unsplash.com/photos/3GPU7euU9gA/download?force=true&w=1920', 'https://burningman.org/', false, '80000', 'Burning Man Project’s mission is to produce the annual event known as Burning Man and to guide, nurture and protect the more permanent community created by its culture. Our intention is to generate society that connects each individual to his or her creative powers, to participation in community, to the larger realm of civic life, and to the even greater world of nature that exists beyond society.

We believe that the experience of Burning Man can produce positive spiritual change in the world. To this end, it is equally important that we communicate with one another, with the citizens of Black Rock City and with the community of Burning Man wherever it may arise. Burning Man is radically inclusive, and its meaning is potentially accessible to anyone. - WE WILL ALWAYS BURN THE MAN.', 'John Smith', 'Sponsorship Coordinator', '911@burningman.org', '703-1247', 'burningman', 'burningman', 'burningman', 'Event Sponsorship Information pending.', '10', null);
-- USE VENUE ID FROM ABOVE INSERT
-- Event Type --
INSERT INTO "junction_event_type"
    (event_id, type_id)
VALUES
    ('10', '5');
-- Sponsors --
INSERT INTO "sponsorships"
    (sponsor_name, sponsor_price, sponsor_description, event_id)
VALUES
    ('Large Booth', '2800', 'This booth is 10x10, limit 2 per Brand.', '10');
-- DEMO AGE JUNCTION --
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (10, 1, 30),
    (10, 2, 25),
    (10, 3, 25),
    (10, 4, 10),
    (10, 5, 5),
    (10, 6, 4),
    (10, 7, 1);
-- Replace first number with event id, third number with %
-- DEMO INCOME JUNCTION --
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (10, 1, 35),
    (10, 2, 25),
    (10, 3, 20),
    (10, 4, 11),
    (10, 5, 5),
    (10, 6, 4),
    (10, 7, 0);
-- Replace first number with event id, third number with %
-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (10, 1, 48),
    (10, 2, 48),
    (10, 3, 4);
-- Replace first number with event id, third number with %
-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (10, 1, 25),
    (10, 2, 75);
-- Replace first number with event id, third number with %

-- Create Venue --
INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Hopkins Main street', '1609 Mainstreet', 'Hopkins', 'Minnesota', '55343', 'Downtown Hopkins', '100000');
-- Create Event --
INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_instagram, event_notes, event_sponsorship_kit, venue_id)
VALUES
    ('The Hopkins Raspberry Festival', '1934', '07/16/2021', '07/18/2021', 'https://bloximages.chicago2.vip.townnews.com/hometownsource.com/content/tncms/assets/v3/editorial/7/22/722ff858-ad51-11e9-ade0-57152c4d4892/5d3711ad207e8.image.jpg?resize=1200%2C806', 'http://www.raspberrycapital.com/', FALSE, '50000', 'For 85 years, The Raspberry Festival has been a cornerstone of Hopkins. We believe festivals connect communities and make them stronger – which the Hopkins Raspberry Festival has done for decades. Now more than ever, that mission is of utmost importance.
For the multitude of reasons we are all aware of, we cannot hold a typical festival this year. Our team is committed to holding a new kind of Hopkins Raspberry Festival this July that will be almost entirely virtual. Our team has worked hard to be creative, and quickly conceive new events that fulfills our mission during these circumstances.
Through that work, we immediately agreed that we could not in good conscience approach businesses to help fund the festival, when we know all too well the pressures they are experiencing. Nor should we ask for city staff resources while they face their own pressures. Thus, our events will be few, new, improvised, imperfect and orchestrated on a shoestring budget.', 'Lou Jean Gleason', 'Executive Director', 'executivedirector@raspberrycapital.com', '952-931-0878', 'RaspberryFestival', 'hopkinsraspberryfestival', 'The Hopkins Raspberry Association volunteers and Raspberry Royal Family dedicate their time and resources to continue the Hopkins Raspberry Festival tradition as conceived and cared for by our predecessors. The festival continues to bring residents and visitors from surrounding communities and from around the state of Minnesota to Hopkins to help boost the local economy and celebrate this tradition in the Hopkins. In particular:
Serve as a centerpiece of a vibrant Downtown Hopkins
Cultivate community pride & spirit
Improve quality of life, makes Hopkins more attractive to businesses, and create a positive community image
Orchestrate events to bring attention and visitors to Hopkins
The Hopkins Raspberry Festival is made possible by our volunteer''s dedication, local businesses donating their time, services and financial contributions and all those that continue to return to enjoy the events each year. To all of you, thank you!
Hopkins Raspberry Festival Royal Family
Each year people who work or live in Hopkins have the opportunity to participate in the festival and can choose to run as Raspberry Festival Royalty. This tradition began at the first Raspberry Festival with the crowning of a Raspberry Queen and her court, who were all daughters of a raspberry farmers. We now have a nine member Royal Family that includes three young women, ages 17-25, four children, ages 6-9, and two seniors who are over age 55. The Royal Family serves for an entire year traveling to other city''s celebrations representing the community of Hopkins and act as ambassadors encouraging them to visit Hopkins.', 'http://www.raspberrycapital.com/sponsors/', 11);
-- USE VENUE ID FROM ABOVE INSERT
-- Event Type --
INSERT INTO "junction_event_type"
    (event_id, type_id)
VALUES
    (11, 10);

-- DEMO AGE JUNCTION --
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (11, 1, 25),
    (11, 2, 5),
    (11, 3, 25),
    (11, 4, 10),
    (11, 5, 10),
    (11, 6, 10),
    (11, 7, 15);
-- Replace first number with event id, third number with %
-- DEMO INCOME JUNCTION --
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (11, 1, 10),
    (11, 2, 35),
    (11, 3, 40),
    (11, 4, 10),
    (11, 5, 3),
    (11, 6, 1),
    (11, 7, 1);
-- Replace first number with event id, third number with %
-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (11, 1, 45),
    (11, 2, 45),
    (11, 3, 10);
-- Replace first number with event id, third number with %
-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (11, 1, 80),
    (11, 2, 20);
-- Replace first number with event id, third number with %

INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, venue_id, event_sponsorship_kit)
VALUES
    ('Minnesota State Fair 2020', '1859', '2020-08-27 13:00:09.250411+00', '2020-09-07 20:30:09.250411+00', 'https://www.cuningham.com/wp-content/uploads/2016/04/state-fair-lulu-blue-barn-06.jpg', 'https://www.mnstatefair.org/', false, '170000', 'Today, often referred to as the “Great Minnesota Get-Together,” the annual Minnesota State Fair is one of the most popular tourist destinations in the region. The fair attracts more than 2 million guests annually.

This end-of-summer tradition is held the 12 days leading up to and through Labor Day.

The fair employs nearly 90 year-round full-time staff members. During the summer, about 450 seasonal staff are added. More than 2,300 people are hired as fair-time staff members.

Located mid-way between Minneapolis and St. Paul, the 322-acre Minnesota State Fairgrounds is renowned for its beautiful gardens and architecture reflecting the art deco and Works Progress Administration eras.

Hundreds of events are held on the fairgrounds throughout the year during the non-fair time, including horse and livestock competitions, merchandise sales, expositions, car shows and more.', 'Melissa Varriano', 'Sponsorship Supervisor', 'fairinfo@mnstatefair.org', '651-288-4306', 'minnesotastatefair', 'mnstatefair', 'mnstatefair', 'Nestled between the Twin Cities of Minneapolis and St. Paul, the Minnesota State Fair provides guaranteed visibility and maximum guest exposure. The Minnesota State Fair has the largest daily attendance of any fair or festival in the nation, giving you the opportunity to reach the maximum number of people in the minimum amount of time. Your company will benefit from public awareness of your product or service, sampling, couponing and retail sales activities.

The Minnesota State Fair is the ideal platform to reach more than two million potential customers in only 12 days (an average of more than 177,000 per day in 2019). Affectionately known as the Great Minnesota Get-Together, the fair’s ever-growing and loyal fan base is what makes this exhibition the “must-stop” destination for sponsors and mobile marketing units promoting across the country. Surveys reveal that a whopping 85% of guests visit the fair every year and an additional 12% visit every other year or every five years. The 2021 fair will run Thursday, Aug. 26 through Monday, Labor Day, Sept. 6.

This annual high-profile 12-day fair with a 150+-year history, features more than 900 entertainment performances on free stages plus a Grandstand stage presenting internationally known artists. Shop more than 1,200 exhibit booths, including 300 food vendors and dozens of sponsors and touring promotional exhibits. Visitors enjoy spectacular educational experiences at the award-winning Eco Experience, History & Heritage Center, Pet Pavilions, CHS Miracle of Birth Center and many other exhibits.

We invite you to join our many successful sponsors.  Sponsorship Application: https://assets.mnstatefair.org/pdf/20-sponsorship-application.pdf', 2, 'https://assets.mnstatefair.org/pdf/19-map-color.pdf');

-- Event Type --
INSERT INTO "junction_event_type"
    (event_id, type_id)
VALUES
    (12, 10);

-- DEMO AGE JUNCTION --
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (12, 1, 25),
    (12, 2, 5),
    (12, 3, 25),
    (12, 4, 10),
    (12, 5, 10),
    (12, 6, 10),
    (12, 7, 15);
-- Replace first number with event id, third number with %
-- DEMO INCOME JUNCTION --
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (12, 1, 10),
    (12, 2, 35),
    (12, 3, 40),
    (12, 4, 10),
    (12, 5, 3),
    (12, 6, 1),
    (12, 7, 1);
-- Replace first number with event id, third number with %
-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (12, 1, 45),
    (12, 2, 45),
    (12, 3, 10);
-- Replace first number with event id, third number with %
-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (12, 1, 80),
    (12, 2, 20);
-- Replace first number with event id, third number with %

INSERT INTO "sponsorships"
    (sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id)
VALUES
    ('Billboard (Small)', '15000', 'https://images.unsplash.com/photo-1559227582-558eeaccd1fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'Rent a small billboard near the Grandstand for the duration of the fair. The size of the billboard is 18 by 12 feet. Limit 4. More information can be found at: https://www.mnstatefair.com/sponsorship/sm_bb', 12),
    ('Billboard (Large)', '17000', 'https://images.unsplash.com/photo-1561898329-9ad7d76fbb2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'Rent a large billboard near the Grandstand for the duration of the fair.  The size of the billboard is 24 by 18 feet.  Limit 2.  More information can be found at: https://www.mnstatefair.org/get-involved/sponsorship/', 12),
    ('Booth (Small)', '22000', 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2016/png/iconmonstr-weather-117.png&r=0&g=0&b=0', 'Rent a small booth near the Bazaar for the duration of the fair.  The size of the booth is 24 by 18 feet.  Limit 2.  More information can be found at: https://www.mnstatefair.org/get-involved/sponsorship/', 12),
    ('Booth (Large)', '25000', 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2016/png/iconmonstr-weather-116.png&r=0&g=0&b=0', 'Rent a large booth near the Bazaar for the duration of the fair.  The size of the booth is 24 by 18 feet.  Limit 2.  More information can be found at: https://www.mnstatefair.org/get-involved/sponsorship/', 12);

-- SINGLE EVENT CREATION, DO ONE INSERT AT A TIME -- STURGIS
-- Create Venue --
INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Sturgis SD', '1040 Harley-Davidson Way', 'Sturgis', 'SD', '57785', 'The City of Sturgis', '800000');
-- Create Event --
INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, event_sponsorship_kit, venue_id)
VALUES
    ('Sturgis, 2020', '1936', '2020-08-07 13:00:09.250411+00', '2020-08-16 13:00:09.250411+00', 'https://www.sturgismotorcyclerally.com/uploads/sturgis-2019-18_li162.jpg', 'https://www.sturgismotorcyclerally.com/', FALSE, '500000', 'The Sturgis Motorcycle Rally is an American motorcycle rally held annually in Sturgis, South Dakota, for ten days usually starting the first Friday in August. In 2015 the city of Sturgis officially expanded the dates to have the rally start on the Friday before the first full week of August and end on the second Sunday. In 2016, Sturgis City Council passed a resolution to begin the Rally on the first Friday in August every year. It was begun in 1938 by a group of Indian Motorcycle riders and was originally held for stunts and races. Attendance has historically been around 500,000 people, reaching a high of over 700,000 in 2015. The event generates around $800 million in revenue.', 'ContactName', 'Title', 'assistant@sturgisareachamber.com', '605-347-2556', 'sturgisrally', 'SturgisRally', 'Instagram', 'Event_Notes', 'https://mcusercontent.com/80907b7c5508415e69820b98e/files/9488aba8-9a8f-413d-970e-f925a7cbde9a/Website_Printable_Sponsorship_Kit.pdf', '12');
-- USE VENUE ID FROM ABOVE INSERT
-- Event Type --
INSERT INTO "junction_event_type"
    (event_id, type_id)
VALUES
    (13, 8);
-- Sponsors --
INSERT INTO "sponsorships"
    (sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id)
VALUES
    ('Platinum', '750', './images/sponsor_icon.png', 'Business Listed on social media event page. Logo in event program or on official event map. Sponsor shout-out in official Chamber social media pages. Shout-out during 2-3 minute speaking opportunity on stage (if applicable).', 13);
-- DEMO AGE JUNCTION --
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (13, 1, 0),
    (13, 2, 25),
    (13, 3, 25),
    (13, 4, 10),
    (13, 5, 20),
    (13, 6, 15),
    (13, 7, 5);
-- Replace first number with event id, third number with %
-- DEMO INCOME JUNCTION --
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (13, 1, 10),
    (13, 2, 15),
    (13, 3, 15),
    (13, 4, 20),
    (13, 5, 20),
    (13, 6, 15),
    (13, 7, 5);
-- Replace first number with event id, third number with %
-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (13, 1, 40),
    (13, 2, 40),
    (13, 3, 20);
-- Replace first number with event id, third number with %
-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (13, 1, 5),
    (13, 2, 95);
-- Replace first number with event id, third number with %

--Sundance   
-- SINGLE EVENT CREATION, DO ONE INSERT AT A TIME --
-- Create Venue --
INSERT INTO venues
    (name, address, city, state, zipcode, venue_notes, venue_capacity)
VALUES
    ('Sundance Resort', '1 Sundance Drive', 'Park City', 'UT', '84604', 'Sundance is centered in Park City and has events Salt Lake City, Ogden City, and at Redfords Sundance Village.  The Sundance Film Festival is open to the public, with tickets going on sale in advance; locals can even buy their tickets two days ahead of the rest of the world.', '120000');
-- Create Event --
INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_notes, event_sponsorship_kit, venue_id)
VALUES
    ('Sundance Film Festival, 2021', '1978', '2021-01-21 13:00:09.250411+00', '2021-01-31 13:00:09.250411+00', 'https://unsplash.com/photos/2uwFEAGUm6E/download?force=true&w=1920', 'https://www.sundance.org/festivals/sundance-film-festival/about', False, '120000', 'Every winter in Utah, the Sundance Film Festival becomes the ultimate gathering of original storytellers and audiences seeking new voices and fresh perspectives. Our annual program includes dramatic and documentary features and short films; series and episodic content; and New Frontier, showcasing emerging media in the form of multimedia installations, performances, and films. We also host daily filmmaker conversations, panel discussions, and live music events. Since 1985, hundreds of films that have launched at the Festival have gained critical recognition and acclaim, reaching new audiences worldwide. The 2021 Sundance Film Festival will take place from January 21 to 31, 2021. Submissions for the 2021 Sundance Film Festival will open on May 1, 2020.', 'Tabitha Jackson', 'Festival Director', 'corporategiving@sundance.org', '(310) 492-2265', 'sundance', 'sundancefest', 'sundancefestival', 'popcorn not provided', 'SponsorKit_URL', 13);
-- USE VENUE ID FROM ABOVE INSERT
-- Event Type --
INSERT INTO "junction_event_type"
    (event_id, type_id)
VALUES
    (14, 6);
-- Sponsors --
INSERT INTO "sponsorships"
    (sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id)
VALUES
    ('Audience engagement', '500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT02lRMIxA9v0r2fY98qmhvxcSSs7JniicjZg&usqp=CAU', 'Audience Engagement
Each year, storytellers present their new work to an audience of 120,000+ people at the Sundance Film Festival. In addition, Sundance Institute presents public programs in communities across the U.S. and 11 international locations. Through these programs, Sundance Institute reaches and engages thousands of additional consumers annually and reaches millions more through press, web, and social platforms. Current partnership opportunities include custom packages for the following programs:
Sundance Film Festival (Park City, Utah) – January
Sundance London – May
Sundance Film Festival - Hong Kong Selects – September
To receive a custom proposal, please contact corporategiving@sundance.org.', 14),
    ('Artist and Alumni Support', '1000', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT02lRMIxA9v0r2fY98qmhvxcSSs7JniicjZg&usqp=CAU', 'Since 1981, Sundance Institute has supported a vibrant community of more than 7,500 storytellers from around the world. In the most recent fiscal year, the Institute supported 790 artists, including 48% women and hailing from 58 countries. Each year the Institute provides artists with programs enabling them to hone their craft and grants totaling over $3M to support their work through development, production, and distribution. Through named fellowships and awards, partners align with the next generation of artists who are breaking new ground, pushing creative boundaries, and igniting new ideas.
Sundance Co//ab extends the Sundance experience into the digital world, offering a safe space to learn, share and connect, reaching a new generation of global storytellers. Sundance Co//ab offers the opportunity to:
Learn: From our custom-created and curated content video library, featuring Sundance Advisors, live, online learning courses and master classes, self-paced learning pathways and curated resources
Share: Work in Progress; Giving and receiving feedback from the community and Sundance Advisors, take part in our monthly challenges and ask questions of our Sundance Advisors
Connect: Access free online events, join in online discussions, and access opportunities
Alumni of the Institute''s programs range from Paul Thomas Anderson (Hard Eight, Boogie Nights, There Will Be Blood) and Nicole Holofcener (Lovely and Amazing, Enough Said), to Cary Fukunaga (True Detective, Sin Nombre), Lynne Shelton (Laggies, Humpday), Ryan Coogler (Fruitvale Station), and many more notable artists.
To receive a custom proposal, please contact corporategiving@sundance.org.', 14),
    ('Original Content', '1500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT02lRMIxA9v0r2fY98qmhvxcSSs7JniicjZg&usqp=CAU', 'Sundance Institute produces content that reaches a cumulative 6MM+ people annually. Ranging from interviews with emerging and established artists to series that highlight the craft of film and theatre making, we offer many opportunities to connect brands with the creativity and innovation that the Institute supports and celebrates.
The Institute also invites a small number of supporters access to customized content developed by artists within our community.
To receive a custom proposal, please contact corporategiving@sundance.org.', 14),
    ('Client and Employee Hospitality', '2000', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT02lRMIxA9v0r2fY98qmhvxcSSs7JniicjZg&usqp=CAU', 'Corporate Hospitality Packages provide priority access for large groups attending the Sundance Film Festival and other events throughout the year. Bespoke packages can include tickets to film festival screenings, private screenings with filmmaker participation, or other custom options.
To receive a custom proposal, please contact corporategiving@sundance.org.', 14),
    ('Technology and Innovation', '2500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT02lRMIxA9v0r2fY98qmhvxcSSs7JniicjZg&usqp=CAU', 'Sundance Institute has a rich history of collaboration with technology companies that provide the resources and tools that are essential to artists and their creative processes.
Brands active within the technology space also have the opportunity to align with New Frontier, a program supporting artists working at the intersection of art, film and technology. The New Frontier initiative includes an exhibition at the Sundance Film Festival, Labs and an Artist-in-Residence program that places artists within organizations to work directly with today''s leading technologists.
To receive a custom proposal, please contact corporategiving@sundance.org.', 14),
    ('Special Events', '3000', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT02lRMIxA9v0r2fY98qmhvxcSSs7JniicjZg&usqp=CAU', 'The Institute''s community of artists, audiences, and partners comes together for a variety of special events held throughout the year. Gatherings for alumni take place in concert with cultural events across the country, each edition of the Sundance Film Festival kicks off with the An Artist at the Table Opening Event, and the annual Summer Benefit honors singular contributions to and achievements in storytelling. At the 2019 Benefit event, the Institute presented the LA Premiere of The Farewell and honored filmmaker Lulu Wang with the Sundance Institute Vanguard Award.
To receive a custom proposal, please contact corporategiving@sundance.org.', 14);
-- DEM AGE JUNCTION --
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (14, 1, 0),
    (14, 2, 25),
    (14, 3, 25),
    (14, 4, 10),
    (14, 5, 20),
    (14, 6, 15),
    (14, 7, 5);
-- Replace first number with event id, third number with %
-- DEMO INCOME JUNCTION --
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (14, 1, 10),
    (14, 2, 15),
    (14, 3, 15),
    (14, 4, 20),
    (14, 5, 20),
    (14, 6, 15),
    (14, 7, 5);
-- Replace first number with event id, third number with %
-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (14, 1, 40),
    (14, 2, 40),
    (14, 3, 20);
-- Replace first number with event id, third number with %
-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (14, 1, 50),
    (14, 2, 50);
-- Replace first number with event id, third number with %

-- Create Event --
INSERT INTO "event"
    (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_description, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_notes, venue_id)
VALUES
    ('Monster Bash 2021', '1994', '07/16/2021', '07/18/2021', 'https://unsplash.com/photos/-qSVn7qAmQU/download?force=true&w=1920', 'https://www.monsterbashnews.com/bash-June.html', FALSE, '4000', 'Not just any convention.  The Monster Bash Movie Convention is even more. It''s a state of mind. A place, like Skull Island, where our imaginations were ignited and still burn behind our everyday jobs and life. The Bash is Forrest Ackerman''s classic monster magazine, the local TV Horror Host, the Aurora monster models, the monster toys of all shapes and plastics.... It''s a place when Halloween was eagerly awaited. It''s the horror and science fiction paperback collections, and most of all it is...the movies.', 'Michael Myers', 'Event Coordinator', 'grindhouse@monsterbash.com', '952-981-0878', 'MonsterBashCon', 'Notes to come for Monster Bash 2021.', 11);
-- USE VENUE ID FROM ABOVE INSERT
-- Event Type --
INSERT INTO "junction_event_type"
    (event_id, type_id)
VALUES
    (15, 6);

-- DEMO AGE JUNCTION --
INSERT INTO "junction_event_age"
    (event_id, age_range_id, percentage)
VALUES
    (15, 1, 25),
    (15, 2, 5),
    (15, 3, 25),
    (15, 4, 10),
    (15, 5, 10),
    (15, 6, 10),
    (15, 7, 15);
-- Replace first number with event id, third number with %
-- DEMO INCOME JUNCTION --
INSERT INTO "junction_event_income"
    (event_id, income_range_id, percentage)
VALUES
    (15, 1, 10),
    (15, 2, 35),
    (15, 3, 40),
    (15, 4, 10),
    (15, 5, 3),
    (15, 6, 1),
    (15, 7, 1);
-- Replace first number with event id, third number with %
-- DEMO GENDER JUNCTION --
INSERT INTO "junction_event_gender"
    (event_id, gender_id, percentage)
VALUES
    (15, 1, 45),
    (15, 2, 45),
    (15, 3, 10);
-- Replace first number with event id, third number with %
-- DEMO RESIDENCY JUNCTION --
INSERT INTO "junction_event_residency"
    (event_id, residency_id, percentage)
VALUES
    (15, 1, 80),
    (15, 2, 20);
-- Replace first number with event id, third number with %
