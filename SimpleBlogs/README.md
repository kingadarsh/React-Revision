

## Frontend design Problem (Race condition)

---

````markdown
# Race Condition Encountered During Pagination

## Overview

While implementing the blog pagination feature, I encountered a **Race Condition**, 
a common issue in asynchronous JavaScript applications. This occurred when the user 
clicked the **Previous** or **Next** buttons multiple times before the previous API request had completed.

Understanding and resolving this issue significantly improved the application's reliability and user experience.

---

## The Problem

Initially, the pagination logic was implemented as follows:

```javascript
function handlePageChange(page) {
    setPage(page);
    fetchData(page);
}
````

Each click immediately triggered a new API request.

For example, if the user was on **Page 5** and clicked the **Previous** button rapidly:

```
Page 5
   ↓
Previous
Previous
Previous
Previous
```

The application generated multiple simultaneous API requests:

```
GET /blogs?page=4
GET /blogs?page=3
GET /blogs?page=2
GET /blogs?page=1
```

Since all requests were asynchronous, they executed concurrently.

---

## Why It Happened

HTTP requests are asynchronous operations.

When multiple requests are sent, **they do not necessarily complete in the same order in which they were initiated**.

For example:

```
Request for Page 4 → 900 ms

Request for Page 3 → 300 ms

Request for Page 2 → 600 ms

Request for Page 1 → 200 ms
```

Although the requests started in this order:

```
4 → 3 → 2 → 1
```

they completed in this order:

```
1 → 3 → 2 → 4
```

Every completed request updated the same React state:

```javascript
setPosts(...)
setPage(...)
```

As a result, whichever request finished last overwrote the latest application state, producing inconsistent UI.

This phenomenon is known as a **Race Condition**.

---

## Observed Effects

Rapid navigation caused several UI inconsistencies:

* Incorrect page number displayed.
* Blog posts from an unexpected page.
* Loading indicator flickering.
* Older API responses overriding newer user actions.
* Temporary mismatch between displayed page number and content.

---

## Root Cause

The root cause was allowing multiple asynchronous requests to modify the same shared state without any synchronization or request management.

In this project, the shared resources were:

* `posts`
* `page`
* `loading`
* `totalPages`

Every API response attempted to update these values independently.

---

## Solution Implemented

The pagination flow was redesigned so that **page state became the single source of truth**.

Instead of directly calling the API from the button click handler:

```javascript
function handlePageChange(newPage) {
    setPage(newPage);
}
```

the data fetching logic was moved into a `useEffect`:

```javascript
useEffect(() => {
    fetchData(page);
}, [page]);
```

This ensured that every page change triggered exactly one fetch operation.

Additionally, the pagination buttons were disabled while data was loading:

```jsx
<button
    disabled={loading}
    onClick={onClickPrevHandler}
>
    Previous
</button>
```

This prevented users from generating multiple concurrent requests.

---

## Why This Solution Works

The improved flow is:

```
User Click
      ↓
setPage()
      ↓
React updates page state
      ↓
useEffect detects page change
      ↓
fetchData(page)
      ↓
API Response
      ↓
UI Updates
```

Only one request is initiated per state change, reducing the possibility of overlapping requests and improving UI consistency.

---

## Key Learning

This project highlighted an important concept in frontend development:

> **Asynchronous operations do not guarantee completion order.**

Whenever multiple asynchronous tasks modify the same state, developers must carefully control when and how updates occur.

Understanding race conditions is essential for building reliable, scalable, and responsive web applications.

---

## Possible Production Enhancements

In production applications, race conditions are commonly handled using additional techniques such as:

* Disabling user interactions while a request is in progress.
* Cancelling previous requests using `AbortController`.
* Ignoring stale API responses.
* Debouncing rapid user interactions.
* Using data-fetching libraries such as **TanStack Query (React Query)** or **SWR**, which provide built-in request deduplication, caching, and stale response management.

These techniques further improve application performance, reliability, and user experience.

```


https://github.com/user-attachments/assets/114325ce-3123-47be-93c2-feb3b5ee7944


