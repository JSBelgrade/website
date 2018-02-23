# Conferences

## Intro

JS Belgrade organization needs a way to
promote conferences from over the world.
In return organization gets free tickets and discounts.

## Model

```yaml
title: Required
start-date: Required
end-date: Required
rating: Optional
google-map: Optional
youtube: Optional
twitter: Optional
city: Required
logo: Required
site: Optional
```

## Important considerations

- File name for conference in content folder must be unique

## Possible Enhancments

- Make cmd tool to generate conferenes

  This can enforce conference schema, avoid name conflicts in conferences file store and
  make process of adding conferences a lot easier.
  Possibly we could search the web for links automatically.

- Add paging
