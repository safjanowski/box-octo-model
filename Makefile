test:
	@./node_modules/.bin/mocha -u bdd --reporter spec

continous:
	@./node_modules/.bin/mocha -u bdd --reporter spec -w

.PHONY: test