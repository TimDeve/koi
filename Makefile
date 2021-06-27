.PHONY: pre-push
pre-push: build-examples test

.PHONY: build-examples
build-examples:
	./build-examples.sh

.PHONY: test
test:
	./test.sh

.PHONY: run-form-example
run-form-example:
	cd examples/todos-form && carp -x main.carp

.PHONY: run-simple-example
run-simple-example:
	cd examples/simple && carp -x main.carp

.PHONY: run-json-api-example
run-json-api-example:
	cd examples/notes-json-api && carp -x main.carp

