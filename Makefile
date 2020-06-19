.PHONY: pre-push build-examples test

pre-push: build-examples test

build-examples:
	./build-examples.sh

test:
	./test.sh

