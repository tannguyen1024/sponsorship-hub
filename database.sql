-- Database Name: sponsorship_hub

------------------------------
------- CREATE TABLES --------
------------------------------

-- USERS --
CREATE TABLE "user"
(
    "id" serial PRIMARY KEY,
    "username" varchar (255) UNIQUE NOT NULL,
    -- username IS email
    "password" varchar NOT NULL,
    "name" varchar,
    "title" varchar,
    "company" varchar,
    "phone" varchar (255),
    "access_level" INT DEFAULT 0
);

-- EVENT --
CREATE TABLE "event"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_name" varchar(255) NOT NULL,
    "year_established" int,
    "start_date" TIMESTAMP NOT NULL,
    "end_date" TIMESTAMP NOT NULL,
    "event_image_url" varchar DEFAULT 'https://unsplash.com/photos/ZhQCZjr9fHo/download?force=true&w=1920',
    "event_website" varchar(2000),
    "event_status" BOOLEAN,
    -- Stretch
    "estimated_attendance" integer NOT NULL,
    "event_notes" varchar(5000) ,
    "contact_name" varchar(255) ,
    "contact_title" varchar(255) ,
    "contact_email" varchar(255) ,
    "contact_phone" varchar(30) ,
    "event_facebook" varchar(2000) ,
    "event_twitter" varchar(2000) ,
    "event_instagram" varchar(2000) ,
    "event_description" varchar(5000),
    "event_sponsorship_kit" varchar(2000),
    "venue_id" int
);

-- VENUES --
CREATE TABLE "venues"
(
    "id" serial PRIMARY KEY NOT NULL,
    "name" varchar(255) NOT NULL,
    "address" varchar (255) NOT NULL,
    "city" varchar(255) ,
    "state" varchar(255) NOT NULL,
    "zipcode" varchar(255) ,
    "venue_notes" varchar(5000) ,
    "venue_capacity" integer
);

-- EVENT TYPES --
CREATE TABLE "event_type"
(
    "id" serial PRIMARY KEY NOT NULL,
    "type" VARCHAR NOT NULL
);

CREATE TABLE "junction_event_type"
(
    "id" serial PRIMARY KEY NOT NULL,
    "type_id" integer NOT NULL,
    "event_id" integer NOT NULL,
    FOREIGN KEY ("type_id") REFERENCES event_type ("id") ON DELETE CASCADE,
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE
);

INSERT INTO event_type
    (type)
VALUES
    ('Art Festival'),
    ('Auto Show'),
    ('Beer Festival'),
    ('City Festival'),
    ('Cultural Festival'),
    ('Film 	Festival'),
    ('Food & Wine Festival'),
    ('Motorcycle Rally'),
    ('Music Festival'),
    ('Street Market Fest');

-- DEMOGRAPHIC AGE --
CREATE TABLE "age_range"
(
    "id" serial PRIMARY KEY NOT NULL,
    "age_range" varchar NOT NULL
);

CREATE TABLE "junction_event_age"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_id" int NOT NULL,
    "age_range_id" int NOT NULL,
    "percentage" int NOT NULL DEFAULT 0,
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("age_range_id") REFERENCES age_range ("id") ON DELETE CASCADE
);

INSERT INTO age_range
    (age_range)
VALUES
    ('0-17'),
    ('18-24'),
    ('25-34'),
    ('35-44'),
    ('45-54'),
    ('55-64'),
    ('65+');

-- DEMOGRAPHIC INCOME --
CREATE TABLE "income_range"
(
    "id" serial PRIMARY KEY NOT NULL,
    "income_range" VARCHAR NOT NULL
);

CREATE TABLE "junction_event_income"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_id" int NOT NULL,
    "income_range_id" int NOT NULL,
    "percentage" int NOT NULL DEFAULT 0,
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("income_range_id") REFERENCES income_range ("id") ON DELETE CASCADE
);

INSERT INTO income_range
    (income_range)
VALUES
    ('0-24999'),
    ('25000-49999'),
    ('50000-74999'),
    ('75000-99999'),
    ('100000-149999'),
    ('150000-199999'),
    ('200000+');

-- DEMOGRAPHIC RESIDENCY --
CREATE TABLE "residency"
(
    "id" serial PRIMARY KEY NOT NULL,
    "residency" VARCHAR
);

CREATE TABLE "junction_event_residency"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_id" int NOT NULL,
    "residency_id" int NOT NULL,
    "percentage" int DEFAULT 0,
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("residency_id") REFERENCES residency ("id") ON DELETE CASCADE
);

INSERT INTO "residency"
    (residency)
VALUES
    ('in_state'),
    ('out_of_state');

-- DEMOGRAPHIC GENDER --
CREATE TABLE "gender"
(
    "id" serial PRIMARY KEY NOT NULL,
    "gender" VARCHAR NOT NULL
);
CREATE TABLE "junction_event_gender"
(
    "id" serial PRIMARY KEY NOT NULL,
    "event_id" int NOT NULL,
    "gender_id" int NOT NULL,
    "percentage" int DEFAULT 0,
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("gender_id") REFERENCES gender ("id") ON DELETE CASCADE
);

INSERT INTO "gender"
    (gender)
VALUES
    ('male'),
    ('female'),
    ('other');

-- SPONSORSHIPS --
CREATE TABLE "sponsorships"
(
    "id" serial PRIMARY KEY NOT NULL,
    "sponsor_name" varchar(255) ,
    "sponsor_price" int ,
    "sponsor_image_url" varchar(2000) DEFAULT './images/sponsor_icon.png',
    "sponsor_description" varchar(2000) ,
    "event_id" int NOT NULL,
    FOREIGN KEY ("event_id") REFERENCES "event" ("id") ON DELETE CASCADE
);

SELECT *
FROM event;