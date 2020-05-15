pre-push: tests build-example

build-example:
	carp -b example.carp

tests:
	./test.sh

