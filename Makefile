MAKEFLAGS = --no-print-directory --always-make --silent
MAKE = make $(MAKEFLAGS)

up:
	faas-cli up -f bv-weather.yml

remove:
	faas-cli remove -f bv-weather.yml

invoke:
	faas-cli invoke -f bv-weather.yml bv-weather

inm: 
	cd bv-weather && yarn

redeploy:
	$(MAKE) remove & $(MAKE) up
