--postgres v9.5

--START
sudo -u postgres psql postgres
--CREATE DB with root postgres
CREATE DATABASE test_siut;
--USER with root postgres
CREATE USER siut4 WITH PASSWORD 'siut4';
--LOGIN IN BD test_siut
sudo -u postgres psql test_siut
--GRANT USER
ALTER DATABASE test_siut OWNER TO siut4;
ALTER SCHEMA public OWNER TO siut4;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO siut4;
--

--SCRIPT DB
--TABLES DB

CREATE SEQUENCE public.core_function_id_seq START WITH 1 INCREMENT BY 1 MINVALUE 1 ;
CREATE SEQUENCE public.core_url_id_seq START WITH 1 INCREMENT BY 1 MINVALUE 1 ;

CREATE TABLE public.core_url (
  core_url_id NUMERIC(10) DEFAULT nextval('public.core_url_id_seq'::regclass) NOT NULL,
  description VARCHAR(150) NOT NULL,
  created_at TIMESTAMP(6) DEFAULT now() NOT NULL,
  updated_at TIMESTAMP(6) DEFAULT now(),
  CONSTRAINT core_url_pk PRIMARY KEY (core_url_id)
);

INSERT INTO public.core_url (description) values ('solicitud.html');
COMMIT;

CREATE TABLE public.core_function (
  core_function_id NUMERIC(15) DEFAULT nextval('public.core_function_id_seq'::regclass) NOT NULL,
  description VARCHAR(100) NOT NULL,
  core_url_id NUMERIC(10),
  created_at TIMESTAMP(6) DEFAULT now() NOT NULL,
  updated_at TIMESTAMP(6) DEFAULT now(),
  CONSTRAINT core_function_pk PRIMARY KEY (core_function_id)
);

INSERT INTO public.core_function (description,core_url_id) values ('Ingresar solicitud',1);
COMMIT;

ALTER TABLE public.core_function
  ADD CONSTRAINT core_function_core_url_fk
  FOREIGN KEY (core_url_id) REFERENCES public.core_url (core_url_id);









