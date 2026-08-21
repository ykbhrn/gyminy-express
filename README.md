# Gyminy

A social training app: coaches publish sessions and portfolio content, students
book onto sessions, follow coaches and message them. Express + MongoDB API with
a Create React App frontend served from the same origin.

## Running locally

Requires Node 24 and a MongoDB instance.

```bash
yarn install
yarn --cwd frontend install
```

Create a `.env` in the project root — see `.env.example`:

```
JWT_SECRET=<a long random string>
MONGODB_URI=mongodb://localhost/gyminy-express-db
PORT=8000
```

And a `frontend/.env` for the upload endpoint:

```
REACT_APP_CLOUDINARY_URL=https://api.cloudinary.com/v1_1/<cloud-name>/auto/upload
```

Then, in two terminals:

```bash
yarn start
yarn --cwd frontend start
```

The CRA dev server proxies `/api` to port 8000 via `frontend/src/setupProxy.js`.

## Seeding

```bash
yarn seed
```

Populates 10 accounts, 7 trainings, 8 images, 7 videos, 3 articles, 3 chat
threads and a follow graph. Every seeded account signs in with the password
`gyminy123` — `nadia@gyminy.dev` is a coach, `sofia@gyminy.dev` a student.

Seeding **deletes** every user, image, video, article, training and chat first.
Because `MONGODB_URI` usually points at a real cluster, the runner refuses any
non-localhost target unless you pass `--force`:

```bash
yarn seed:dry      # validate the data, contact no database
yarn seed --force  # seed a remote database, deleting what is there
```

Seed imagery lives in `frontend/public/seed` and is generated SVG, so it needs
no network access. The exercise videos are freely-licensed WebM files from
Wikimedia Commons — note that WebM does not play in Safari.

## Deploying to Render

`render.yaml` describes the service. Note that the `Procfile` in this repo is
Heroku's format and Render ignores it.

Build and start commands:

```
buildCommand: yarn install --frozen-lockfile && yarn build
startCommand: node index.js
```

The build command matters: `frontend/build` is not committed, so without it the
service boots and then fails to serve any page.

Environment variables to set in the dashboard:

| Variable | Notes |
| --- | --- |
| `JWT_SECRET` | Signs JWTs. Changing it signs every user out. |
| `MONGODB_URI` | Atlas connection string including the database name. |
| `REACT_APP_CLOUDINARY_URL` | **Needed at build time.** CRA inlines `REACT_APP_*` into the bundle during the build; if it is absent the bundle ships `undefined` and uploads fail silently. |
| `NODE_ENV` | Set to `production` to suppress the verbose request logger. |

Render provides `PORT` automatically; `config/environment.js` reads it.

Atlas needs to accept connections from Render — either allow-list the service's
outbound IPs or open network access, depending on your plan.
