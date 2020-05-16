.PHONY: pre-push build-example test

pre-push: build-example test

build-example:
	carp -b example.carp

test:
	./test.sh

