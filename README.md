# Koi

A toy web framework for [Carp](https://github.com/carp-lang/Carp)

## Warning

This is very much a proof of concept please don't use this for anything serious.

## Examples

### [Basic](./examples/simple)

```clojure
(load "https://github.com/TimDeve/koi@v0.2.2")

(use Koi)

(defn root-handler [req]
  (Res.send (HttpStatus.Ok)
            @"text/plain"
            @"Hello from Carp!"))

(defn routes []
  [(Route.init (HttpVerb.GET) @"/" root-handler)])

(defn main []
  (serve "localhost" 8080 (routes)))
```

### [TODO App using HTML form](./examples/todos-form)

```
make run-form-example
```

### [JSON API with SQLite](./examples/notes-json-api)

```
make run-json-api-example
```
