# Conferences

## Intro

JS Belgrade organization needs a way to
promote conferences from all over the world.
In return, organization gets free tickets and discounts.

## Model

```yaml
title: <string> Required
start-date: <iso-date> Required
end-date: <iso-date> Required
google-map: <string> Optional
youtube: <string> Optional
twitter: <string> Optional
city: <string> Required
logo: <string> Required
site: <string> Optional
archive: <boolean> Optional
```

## Important considerations

- File name for conference in content folder must be unique

## Possible Enhancements

- Make cmd tool to generate conferences

  This can enforce conference schema, avoid name conflicts in conferences file store and
  make process of adding conferences a lot easier.
  Possibly we could search the web for links automatically.

- Add paging
