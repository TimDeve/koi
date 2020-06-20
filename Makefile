.PHONY: pre-push build-examples test

pre-push: build-examples test

build-examples:
	./build-examples.sh

test:
	./test.sh

run-form-example:
	cd examples/todos-form && carp -x main.carp

run-simple-example:
	cd examples/simple && carp -x main.carp

run-json-api-example:
	cd examples/notes-json-api && carp -x main.carp

