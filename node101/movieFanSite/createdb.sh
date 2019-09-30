createdb movie_site;
psql -f schema.sql movie_site;
psql -f seed.sql movie_site;