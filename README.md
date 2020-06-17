# Koi

A toy web framework for [Carp](https://github.com/carp-lang/Carp)

## Example

```clojure
(load "git@github.com:TimDeve/koi@v0.1.0")

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

