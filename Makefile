.PHONY: pre-push build-examples test

pre-push: build-examples test

build-examples:
	./build-examples.sh

test:
	./test.sh

run-todo-example:
	cd examples/todos && carp -x main.carp

run-simple-example:
	cd examples/simple && carp -x main.carp

