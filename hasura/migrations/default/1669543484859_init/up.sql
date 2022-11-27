SET standard_conforming_strings = off;
SET check_function_bodies = false;
SET escape_string_warning = off;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.film (
    name text NOT NULL
);
CREATE TABLE public.quote (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    text text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    film text NOT NULL
);
ALTER TABLE ONLY public.film
    ADD CONSTRAINT film_pkey PRIMARY KEY (name);
ALTER TABLE ONLY public.quote
    ADD CONSTRAINT quote_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.quote
    ADD CONSTRAINT quote_text_key UNIQUE (text);
CREATE TRIGGER set_public_quote_updated_at BEFORE UPDATE ON public.quote FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_quote_updated_at ON public.quote IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.quote
    ADD CONSTRAINT quote_film_fkey FOREIGN KEY (film) REFERENCES public.film(name) ON UPDATE CASCADE ON DELETE CASCADE;
