---
tags: [ "linux", "date", "fomatting" ]
source-title: "date(1) — Linux manual page"
source-url: "https://man7.org/linux/man-pages/man1/date.1.html"
---

# Date command sequences

## Escape codes and specials

| Code | Example   |
| ---- | --------- |
| `%%` | `%`       |
| `%t` | (tab)     |
| `%n` | (newline) |

## Numerics

| Code | Description | Range                    |
| ---- | ----------- | ------------------------ |
| `%Y` | Year        | `2020`                   |
| `%m` | Month       | `01`..`12`               |
| `%H` | Hour (24h)  | `00`..`23`               |
| `%I` | Hour (12h)  | `01`..`12`               |
| `%S` | Seconds     | `00`..`60`               |
| `%N` | Nanoseconds | `000000000`..`999999999` |

### Odd numerics

| Code | Description                                                         | Range        |
| ---- | ------------------------------------------------------------------- | ------------ |
| `%s` | Seconds since [Unix epoch](https://en.wikipedia.org/wiki/Unix_time) | N/A          |
| -    | -                                                                   | -            |
| `%j` | Day of the year                                                     | `001`..`366` |
| `%d` | Day of the month                                                    | `01`         |
| `%u` | Day of the week *(1 is Monday)*                                     | `1`..`7`     |
| -    | -                                                                   | -            |
| `%u` | Week number of year *(Sunday is the first week day)*                | `00`..`53`   |
| `%V` | ISO week number of year *(Monday is the first week day)*            | `01`..`53`   |
| -    | -                                                                   | -            |
| `%q` | Year quarter                                                        | `1`..`4`     |
| `%C` | Century                                                             | `20`         |
| `%y` | Last two digits of year                                             | `00`..`99`   |

## Spaced padded

| Code | Description      | Range     | Manual equivalent |
| ---- | ---------------- | --------- | ----------------- |
| `%k` | Hour (24h)       | `0`..`23` | `%_H`             |
| `%l` | Hour (12h)       | `1`..`12` | `%_I`             |
| -    | -                | -         |
| `%e` | Day of the month | `01`      | `%_d`             |

## Strings

| Code        | Description                       | Example   |
| ----------- | --------------------------------- | --------- |
| `%a`        | Abbreviated weekday               | `Sun`     |
| `%A`        | Full weekday                      | `Sunday`  |
| -           | -                                 | -         |
| `%b` / `%h` | Abbreviated month                 | `Jan`     |
| `%B`        | Full month                        | `January` |
| -           | -                                 | -         |
| `%p`        | Locale's AM/PM                    | `PM`      |
| `%P`        | Locale's AM/PM (lowercase)        | `pm`      |
| -           | -                                 | -         |
| `%Z`        | Alphabetic time zone abbreviation | `EDT`     |

## Timezones

| Code    | Description                                       | Example             |
| ------- | ------------------------------------------------- | ------------------- |
| `%z`    | +hhmm numeric time zone                           | **`-0400`**         |
| `%:z`   | +hh:mm numeric time zone                          | **`-04`**`:00`      |
| `%::z`  | +hh:mm:ss numeric time zone                       | **`-04`**`:00:00`   |
| `%:::z` | numeric time zone with `:` to necessary precision | **`-04`**`, +05:30` |
| -       | -                                                 | -                   |
| `%Z`    | Alphabetic time zone abbreviation                 | `EDT`               |

## Templates

| Code | Description            | Example                    | Manual equivalent |
| ---- | ---------------------- | -------------------------- | ----------------- |
| `%c` | Locale's date and time | `Thu Mar  3 23:05:25 2005` | N/A               |
| `%x` | Locale's date          | `12/31/99`                 | N/A               |
| `%X` | Locale's time          | `23:13:48`                 | N/A               |
| `%r` | Locale's time (12h)    | `11:11:04 PM`              | N/A               |
| -    | -                      | -                          | -                 |
| `%R` | 24h time               | `11:11`                    | `%H:%M`           |
| `%T` | Time                   | `11:11:04`                 | `%H:%M:%S`        |
| `%D` | Date                   | `12/19/20`                 | `%m/%d/%y`        |