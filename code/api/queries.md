Get all user objects:

```
query {
  users {
    id
    name
    email
    password
    role
    styleSummary
    createdAt
    updatedAt
  }
}
```

Get a single user object by ID:
```
query {
  user(id: <integer>) {
    id
    name
    email
    password
    role
    styleSummary
    createdAt
    updatedAt
  }
}
```

Update a users styleSummary with style survey form data:
```
mutation {
  userStyleSummaryUpdate(id: <integer>, formData: <form data>)
}
```

---
Form data parameter assumed to be in following format when sent with styleSummary mutation:
```
{
  "tops": "punk",
  "pants": "comfy",
  "dresses": "punk",
  "shoes": "punk",
  "accessories": "prep"
}
```
