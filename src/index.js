import { fromEvent, pipe } from "rxjs"
import { switchMap } from "rxjs/operators"

const getLuke = pipe(
  switchMap(event =>
    fetch(`https://johnlindquist-swapi-json-server-2.glitch.me/people/1`)
  ),
  switchMap(response => response.json())
)

fromEvent(document, "click")
  .pipe(getLuke)
  .subscribe(console.log)
