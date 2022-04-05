# Koi

A toy web framework for [Carp](https://github.com/carp-lang/Carp)

## Examples

### [Basic](./examples/simple)

```clojure
(load "git@github.com:TimDeve/koi@v0.2.1")

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
