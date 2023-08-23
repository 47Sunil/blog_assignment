## Available Scripts

In the src directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project - Blog

### Model

- blog Model

```yaml
{
  {
    author: { type: String, require: true },
    title: { type: String, require: true },
    content: { type: String, require: true },
    publication_date: { type: Date, default: Date.now },
  },
  createdAt: { timestamp },
  updatedAt: { timestamp },
}
```

## Blog API

### POST localhost:5000/api/v1/blogs

- Create a blog document from request body.
- Return HTTP status 201 on a succesful blog creation. Also return the blog document. The response should be a JSON object like [this](#successful-response-structure)
- Create atleast 10 blogs for each user
- Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

### GET localhost:5000/api/v1/blogs/list

- Returns all blogs in the collection that aren't deleted. Return only blog \_id, title, excerpt, userId, category, releasedAt, reviews field. Response example [here](#get-blogs-response)
- Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure)
- If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure)

### GET localhost:5000/api/v1/blogs/:id

- Returns a blog with complete details including reviews. . Response example [here](#blog-details-response)
- Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure)
- If the blog has no reviews then the response body should include blog detail as shown [here](#blog-details-response-no-reviews) and an empty array for reviewsData.
- If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure)

### PUT localhost:5000/api/v1/blogs/:id

- Update a blog by changing its
  - author
  - name
  - title
- Check if the blogId exists (must have isDeleted false and is present in collection). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
- Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure)
- Also make sure in the response you return the updated blog document.

### DELETE localhost:5000/api/v1/blogs/:id

- Check if the blogId exists and is not deleted. If it does, mark it deleted and return an HTTP status 200 with a response body with status and message.
- If the blog document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure)

Refer below sample
![A Postman collection and request sample](assets/Postman-collection-sample.png)

## Response

### Successful Response structure

```yaml
{ status: true, message: "Success", data: {} }
```

### Error Response structure

```yaml
{ status: false, message: "" }
```

## Collections

{
"\_id": ObjectId("88abc190ef0288abc190ef55"),
"author":"Rj"
"title": "How to win friends and influence people",
"content": "blog body",
"publication_date": "2021-09-17T04:25:07.803Z",
"createdAt": "2021-09-17T04:25:07.803Z",
"updatedAt": "2021-09-17T04:25:07.803Z",
}

````

## Response examples
### Get blogs response
```yaml
{
  status: true,
  message: 'blogs list',
  data: [
    {
      "_id": ObjectId("88abc190ef0288abc190ef55"),
  "author":"Rj"
  "title": "How to win friends and influence people",
  "content": "blog body",
   "publication_date": "2021-09-17T04:25:07.803Z",
  "createdAt": "2021-09-17T04:25:07.803Z",
  "updatedAt": "2021-09-17T04:25:07.803Z",
    },
    {
     "_id": ObjectId("88ab5450ef0288abc190ef55"),
  "author":"Don"
  "title": "How to win friends",
  "content": "blog body",
   "publication_date": "2021-09-17T04:25:07.803Z",
  "createdAt": "2021-09-17T04:25:07.803Z",
  "updatedAt": "2021-09-17T04:25:07.803Z",
    }
  ]
}
````

## Available Scripts

In the src directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project - Blog

### Model

- blog Model

```yaml
{
  {
    author: { type: String, require: true },
    title: { type: String, require: true },
    content: { type: String, require: true },
    publication_date: { type: Date, default: Date.now },
  },
  createdAt: { timestamp },
  updatedAt: { timestamp },
}
```

## Blog API

### POST localhost:5000/api/v1/blogs

- Create a blog document from request body.
- Return HTTP status 201 on a succesful blog creation. Also return the blog document. The response should be a JSON object like [this](#successful-response-structure)
- Create atleast 10 blogs for each user
- Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

### GET localhost:5000/api/v1/blogs/list

- Returns all blogs in the collection that aren't deleted. Return only blog \_id, title, excerpt, userId, category, releasedAt, reviews field. Response example [here](#get-blogs-response)
- Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure)
- If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure)

### GET localhost:5000/api/v1/blogs/:id

- Returns a blog with complete details including reviews. . Response example [here](#blog-details-response)
- Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure)
- If the blog has no reviews then the response body should include blog detail as shown [here](#blog-details-response-no-reviews) and an empty array for reviewsData.
- If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure)

### PUT localhost:5000/api/v1/blogs/:id

- Update a blog by changing its
  - author
  - name
  - title
- Check if the blogId exists (must have isDeleted false and is present in collection). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
- Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure)
- Also make sure in the response you return the updated blog document.

### DELETE localhost:5000/api/v1/blogs/:id

- Check if the blogId exists and is not deleted. If it does, mark it deleted and return an HTTP status 200 with a response body with status and message.
- If the blog document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure)

Refer below sample
![A Postman collection and request sample](assets/Postman-collection-sample.png)

## Response

### Successful Response structure

```yaml
{ status: true, message: "Success", data: {} }
```

### Error Response structure

```yaml
{ status: false, message: "" }
```

## Collections

{
"\_id": ObjectId("88abc190ef0288abc190ef55"),
"author":"Rj"
"title": "How to win friends and influence people",
"content": "blog body",
"publication_date": "2021-09-17T04:25:07.803Z",
"createdAt": "2021-09-17T04:25:07.803Z",
"updatedAt": "2021-09-17T04:25:07.803Z",
}

````

## Response examples
### Get blogs response
```yaml
{
  status: true,
  message: 'blogs list',
  data: [
    {
      "_id": ObjectId("88abc190ef0288abc190ef55"),
  "author":"Rj"
  "title": "How to win friends and influence people",
  "content": "blog body",
   "publication_date": "2021-09-17T04:25:07.803Z",
  "createdAt": "2021-09-17T04:25:07.803Z",
  "updatedAt": "2021-09-17T04:25:07.803Z",
    },
    {
     "_id": ObjectId("88ab5450ef0288abc190ef55"),
  "author":"Don"
  "title": "How to win friends",
  "content": "blog body",
   "publication_date": "2021-09-17T04:25:07.803Z",
  "createdAt": "2021-09-17T04:25:07.803Z",
  "updatedAt": "2021-09-17T04:25:07.803Z",
    }
  ]
}
````
